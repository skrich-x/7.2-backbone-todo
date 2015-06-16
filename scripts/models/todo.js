var Todo = Backbone.Model.extend({
  defaults: {
    'task': '',
    'created_at': ''
  },

});

var TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: 'todo.json'
});

console.log('working');

export default {Todo, TodoCollection};
