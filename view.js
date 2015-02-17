var PostView = Backbone.View.extend ({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  initialize: function () {

  },

  // events: {
  //   "click .showCreate": "showCreate";
  //   "click .deletePost": "removePost";
  // },

  render: function (){
    //this.$el.html(this.template(this.model).toJSON()))
    var markup= this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;

  },

  removePost: function () {
    this.model.destroy();
    this.$el.remove();

  }


});

var postView = new PostView ();





var AppView = Backbone.View.extend ({
  el: $("section"),
  initialize: function (){
    console.log("app view initialized");

  },
  addOnePost: function () {
    var postview = new PostView ({model: post});
    this.$el.append(PostView.render).el;

  },



  showCreate: function (event) {
    event.preventDefault();
    this.$el.find("#createPost").toggleClass('show');

  },


  createPost: function (event) {
    event.preventDefault();
    var newPost = {
      title: $("#createPost").find('input[name: "title"].val()'),
      content: $("#createPost").find('input[name: "content"].val()'),
      author: $("#createPost").find('input[name: "author"].val()'),
    }



  var newModelPost = new PostModel(newPost);
  newModelPost.save();
  this.collection.add(newModelPost);
},
  addAllPosts: function () {

    _.each(this.collection.models, this.addOnePost, this)

  }



//  render: function () {
  //$('section').html(this.el);
//  console.log(this.el);

//},
});


//$("body").html(postview.render().el);
