// import AddTask from './views/add-task';
import ListItem from './views/todo-item';
import TodoView from './views/todo-lists';
import {Todo, TodoCollection} from './models/todo';

(function(){
  'use strict';


  $(document).ready(function(){
    Backbone.history.start();

    var list = new TodoCollection();

    list.fetch().then(function(){
      var todo = new TodoView({collection: list});
      $('#main').html(todo.el);
    }

    .bind(this), console.error.bind(console));

      // var addTask = new AddTask({collection: list});
      // $('#header').html(addTask.el);
  });


})();
