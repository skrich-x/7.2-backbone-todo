// import TodoList from './views/todo-lists';
// import {Todo, TodoCollection} from './models/todo';

import TodoView from './views/todo-lists';
import {Todo, TodoCollection} from './models/todo';

console.log('imports ok');

(function(){
  'use strict';


  $(document).ready(function(){
    Backbone.history.start();
    var list = new TodoCollection();
    console.log('hello', list);

    list.fetch().then(function(){
      console.log("in callback")
      var todo = new TodoView({collection: list});
      $('#main').html(todo.el);
    }.bind(this), console.error.bind(console));


  });
})();
