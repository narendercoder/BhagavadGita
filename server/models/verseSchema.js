const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  verse_number: {
    type: Number,
    required: true,
  },
  chapter_number: {
    type: Number,
    required: true,
  },
  slug:{
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  translations: [{
    
  }],
},
{
  timestamps: true,
});

module.exports = mongoose.model("RandomVerse", verseSchema);