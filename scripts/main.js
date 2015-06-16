(function(){
  'use strict';

  $(document).ready(function(){
    $('#main').prepend(JST.taskList());
    $('#main').html(JST.taskItem());
  });
})();
