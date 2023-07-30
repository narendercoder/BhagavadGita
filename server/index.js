const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const { CLIENT_ACCESS_URL } = require("../server/config/keys");

app.use(cors({
    origin: CLIENT_ACCESS_URL,
    methods: ["GET", "POST"]
}));

app.use(express.json());
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '43dad927f4msh75983f0bf4a29d5p1ac4d8jsna190ce106853',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

//for get all chapters
app.get("/chapters", async (req, res) => {
  try {
    const response = await axios.request("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/", options);
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//for random verse
const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78]

const ch = Math.floor(Math.random() * 17) + 1
const sl = Math.floor(Math.random() * slokcount[ch - 1]) + 1 

app.get("/slok", async (req, res) => {
  try {
    const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${sl}/`, options);
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//for get all verses of particular chapter
app.get("/chapter/:ch", async (req, res) => {
  const ch = req.params.ch;
  try {
    const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/`, options);
    const result = response.data;
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//for get particular verses of particular chapter
app.get("/chapter/:ch/slok", async (req, res) => {
  const ch = req.params.ch;
  try {
    const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/`, options);
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get("/chapter/:ch/slok/:sl", async (req, res) => {
  const ch = req.params.ch;
  const sl = req.params.sl;
  try {
    const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${sl}/`, options);
    const result = response.data;
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.use("/contact", contactRoutes)


app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(4000, () => {
  console.log(`server is running at port 4000`);
});
