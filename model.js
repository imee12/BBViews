var PostModel = Backbone.Model.extend ({
  urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoos',
  idAttribute: '_id',
  defaults: function () {
    return {
      author: "imee"

    };

  },
    initialize: function () {
      console.log("model is created");
},

});

var post = new PostModel({title: "Whatup!"});
console.log(post);
