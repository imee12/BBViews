var PostCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoos',
  model: PostModel
});

var collection = new PostCollection(post);
console.log(collection);
