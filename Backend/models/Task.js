const mongoose = require('mongoose')
const Schema = mongoose.Schema

//WE HAVE TO CHECK THIS MODEL
// Create Schema
const TaskSchema = new Schema({
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
  Sprint_id :[{ type: String,
                Ref:{}
}],
})

module.exports = Tasks = mongoose.model('tasks', TaskSchema)
