const mongoose = require('mongoose')
const Schema = mongoose.Schema

//WE HAVE TO CHECK THIS MODEL

// Create Sprint Schema
const ProjectSchema = new Schema({
  sprints: [{
    type: String
  },
  //ID's
  [{},{}],
    //Reference
    {}
],
  name: {
    type: String,
    required: true
  },
  owner: {
      user_id: String
  }
})

module.exports = Projects = mongoose.model('projects', ProjectSchema)
