const mongoose = require('mongoose')
const Schema = mongoose.Schema

//WE HAVE TO CHECK THIS MODEL

// Create Sprint Schema
const ProjectSchema = new Schema({
 sprints:[{
   sprint: { type: Schema.Types.ObjectId, ref : 'Sprint'},
   tasks: { type: Schema.Types.ObjectId, ref : 'Task'}
 }],
  name: {
    type: String,
    required: true
  },
  owner: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
  }
},{timestamps : true})

module.exports = Projects = mongoose.model('projects', ProjectSchema)
