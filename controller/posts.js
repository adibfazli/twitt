var Post = require('../models/post');
var User = require('../models/user')
var request = require('request');

module.exports = {
    create,
    delete : deleteOne
}

function create(req, res) {
    post = {}
    post.content = req.body.content
    post.user = req.user
    Post.create(post, function (err, pst) {
        req.user.posts.unshift(pst)
        req.user.save(function (err) {
            res.redirect('/main/show')
        });
    });
}
function deleteOne (req , res){
    User.findById(req.user.id ,function(err , user){
        console.log('##########################',user )
            user.posts.filter(p => p._id.toString() != req.params.id)
            user.save()
            Post.findById(req.params.id , function(err , post){
                post.remove()
                res.redirect(`back`)
            })
        });
}
