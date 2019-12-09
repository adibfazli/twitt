var mongoose = require('mongoose')
var Schema = mongoose.Schema;
//////////////////////////////////
var userSchema = new Schema({
  bio: String,
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  posts:[{
    type:Schema.Types.ObjectId,
    ref:'Post'
  }]
})
module.exports = mongoose.model('User' , userSchema);