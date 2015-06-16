export default Backbone.View.extend({
  template: JST.taskList,
  className: 'list',

  initialize: function(){
    this.render();

  },

  render: function (){
    this.$el.html(this.template(this.collection.toJSON()));

  }

});
