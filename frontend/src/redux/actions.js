import {LIST_API} from "../const";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const FETCHING = "FETCHING";
export const SELECT_TODO = "SELECT_TODO";
let actions = {
  addTodo: function (title) {
    return (dispatch, getState) => {
      if (!getState().isFetching) {
        return dispatch(postTodo(title))
      }
    };
  },
  toggleTodo: function (id) {
    return (dispatch, getState) => {
      if (!getState().isFetching) {
        return dispatch(toggleTodo(id));
      }
    }
  },
  deleteTodo: function (id) {
    return (dispatch, getState) => {
      if (!getState().isFetching) {
        return dispatch(deleteTodo(id))
      }
    }
  },
  fetchTodos() {
    return (dispatch, getState) => {
      if (shouldFetchTodos(getState())) {
        return dispatch(fetchTodos())
      }
    }
  },
  selectTodo(id) {
    return {type: SELECT_TODO, id};
  }
};

function shouldFetchTodos(state) {
  const todos = state.todos;
  if (!todos)
    return true;
  return !state.isFetching;
}

function deleteTodo(id) {
  return dispatch => {
    dispatch(makeRequest());
    return fetch(LIST_API + id, {method: "DELETE"})
      .then(() => dispatch(fetchTodos()))
  }
}

function toggleTodo(id) {
  return (dispatch, getState) => {
    dispatch(makeRequest());
    let todo = getState().todos.find(todo => todo.id === id);
    todo.done = !todo.done;
    return fetch(LIST_API,
      {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      .then(() => dispatch(fetchTodos()))
  }
}

function fetchTodos() {
  return dispatch => {
    dispatch(makeRequest());
    return fetch(LIST_API)
      .then(resp => resp.json())
      .then(todos => dispatch(receiveTodos(todos)));
  }
}

function makeRequest() {
  return {type: "FETCHING"};
}

function receiveTodos(todos) {
  return {
    type: "RECEIVE_TODOS",
    todos
  }
}

function postTodo(title) {
  return dispatch => {
    dispatch(makeRequest());
    return fetch(LIST_API,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
      })
      .then(() => dispatch(fetchTodos()))
  }
}

export default actions
