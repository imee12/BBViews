posts = [



],

$(document).ready(function () {

});

var post = new PostModel();
console.log(post);
//
// var post1View = new PostView({model: post1});

var postCollection = new PostCollection (posts);
var appview = new AppView({collection: postCollection});
