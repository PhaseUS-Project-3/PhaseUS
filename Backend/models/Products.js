const mongoose = require('mongoose')
const Schema = mongoose.Schema

//WE HAVE TO CHECK THIS MODEL

// Create Sprint Schema
const ProductSchema = new Schema({
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

module.exports = Products = mongoose.model('products', ProductSchema)
