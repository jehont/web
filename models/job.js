const mongoose = require('mongoose')

const jobShema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true 
  },
  address: {
    type: String,
    required: true 
  },
  phone: {
    type: Number,
    required: true
  },
  salary: {
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

module.exports = mongoose.model('Job', jobShema)