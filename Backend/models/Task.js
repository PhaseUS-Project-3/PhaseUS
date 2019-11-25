const mongoose = require('mongoose')
const Schema = mongoose.Schema

//WE HAVE TO CHECK THIS MODEL
// Create Schema
const TaskSchema = new Schema({
  sprint_id: {
    type: Schema.Types.ObjectId,
    ref: "Sprint"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type : {
    type: String
  },
  status:{
    type: Boolean,
    required: true,
    default: "Task"
  },
  assigned_user: { type: Schema.Types.ObjectId, ref : 'User'}, 
})

module.exports = Tasks = mongoose.model('tasks', TaskSchema)
