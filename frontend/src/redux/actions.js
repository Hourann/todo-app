import $ from 'jquery';
var todos = [];
const LIST_API = 'http://127.0.0.1:8000/api/';
function updateTodo() {
  $.ajax({
    url: LIST_API,
    async: false,
    success: resp => todos = resp
  });
}

let actions = {
  addTodo: function (title) {
    $.ajax({
      url: LIST_API,
      method: 'post',
      data: { title },
      async: false,
      success: resp => updateTodo()
    });
    return {
      type: 'ADD_TODO',
      title: title,
      todos
    }
  },
  completeTodo: function (id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  deleteTodo: function (id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  }
}
export default actions

