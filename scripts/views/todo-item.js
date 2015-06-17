export default Backbone.View.extend({
  template: JST.taskItem,
  className: 'item',

  initialize: function(){
    this.render();
  },

  render: function (){
    this.$el.html(this.template());
  }


});
