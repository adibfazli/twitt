var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//////////////////////////////////
var postSchema = new Schema({
    content:String,
    likes: [],
    comments: [{
        user: String,
        comment: String,
        usrId: String,
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },

});

module.exports = mongoose.model('Post',postSchema)