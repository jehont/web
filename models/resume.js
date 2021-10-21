const mongoose = require('mongoose')

const resumeShema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  salary: {
    type: String,
    required: true 
  },
  skill: {
    type: String,
    required: true 
  },
  type: {
    type: String,
    required: true 
  },
  user: {
    type: String,
    required: true,
    ref: "User"
  },
  info: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('resume', resumeShema)