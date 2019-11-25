const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Do we have to set ID here?

// Create Sprint Schema
const SprintSchema = new Schema({
  project_id:{
    type: Schema.Types.ObjectId,
    ref: "Projects"
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  name: {
    type: String,
    required: true
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: "Task"
  }],
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
