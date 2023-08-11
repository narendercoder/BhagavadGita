const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const axios = require("axios");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const schedule = require("node-schedule");
const { CLIENT_ACCESS_URL } = require("../server/config/keys");
const verseSchema = require("./models/verseSchema");

require("dotenv").config();
connectDB();

app.use(
  cors({
    origin: CLIENT_ACCESS_URL,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

// console.log(process.env.RAPID_API_KEY)

//for get all chapters
app.get("/chapters", async (req, res) => {
  try {
    const response = await axios.request(
      "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
      options
    );
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//for random verse

const getRandomVerse = async () => {
  const slokcount = [
    47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
  ];

  const ch = Math.floor(Math.random() * 17) + 1;
  const sl = Math.floor(Math.random() * slokcount[ch - 1]) + 1;

  try {
    // const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    // await verseSchema.deleteMany({ createdAt: { $lt: oneMinuteAgo } });


    // Delete previous day's data
    // Get the current date
    const currentDate = new Date();
    // Calculate the previous date
    const previousDate = new Date();
    previousDate.setDate(currentDate.getDate() - 1);

    await verseSchema.deleteMany({ createdAt: { $lt: previousDate } });
    console.log("Previous data deleted successfully.");

    //Fetch api
    const response = await await axios.get(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${sl}/`,
      options
    ); // Replace API_URL with your actual API endpoint
    const apiData = response.data;

    // Save data to MongoDB
    const newVerse = new verseSchema({
      id: apiData.id,
      verse_number: apiData.verse_number,
      chapter_number: apiData.chapter_number,
      slug: apiData.slug,
      text: apiData.text,
      translations: apiData.translations,
    });

    await newVerse.save();
    // res.status(200).json( result );
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};

//schedule the job to run every day at 12:00 AM
// const rule = new schedule.RecurrenceRule();
// rule.hour = 0;      // 0 represents 12:00 AM
// rule.minute = 0;
// rule.second = 0;

schedule.scheduleJob({ hour: 0, minute: 0, dayOfWeek: new schedule.Range(0, 6) }, function () {
  getRandomVerse();
});

app.get("/slok", async (req, res) => {
  const result = await verseSchema.find({});
  res.status(200).json(result);
});


//for get all verses of particular chapter
app.get("/chapter/:ch", async (req, res) => {
  const ch = req.params.ch;
  try {
    const response = await axios.get(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/`,
      options
    );
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//for get particular verses of particular chapter
app.get("/chapter/:ch/slok", async (req, res) => {
  const ch = req.params.ch;
  try {
    const response = await axios.get(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/`,
      options
    );
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/chapter/:ch/slok/:sl", async (req, res) => {
  const ch = req.params.ch;
  const sl = req.params.sl;
  try {
    const response = await axios.get(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${sl}/`,
      options
    );
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4000, () => {
  console.log(`server is running at port 4000`);
});
