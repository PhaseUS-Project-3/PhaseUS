const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Do we have to set ID here?

// Create Sprint Schema
const SprintSchema = new Schema({
  users: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  }
})

module.exports = Sprint = mongoose.model('sprints', SprintSchema)
