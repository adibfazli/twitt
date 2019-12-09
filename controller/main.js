var User = require('../models/user');
var Post = require('../models/post');
var fetch = require('node-fetch');
var request = require('request');
var rootApi = `https://api.darksky.net/forecast/${process.env.DARK_SKY_TOKEN}/37.8267,-122.4233`

module.exports = {
    show,
}
function show(req, res) {
    Post.find({}).populate('user').exec(
        function (err, pst) {
            request(rootApi, function (err, respons, body) {
                var weather = JSON.parse(body);
                res.render('main/show', { weather, pst})
            });
        });
}