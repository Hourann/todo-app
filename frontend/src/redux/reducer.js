import {FETCHING, RECEIVE_TODOS, SELECT_TODO} from "./actions";

export default function reducer(state = {
  todos: null,
  visibility: 'SHOW_ALL',
  order: 'ID',
  isFetching: false,
  selectedId: null
}, action) {
  switch (action.type) {
    // case 'ADD_TODO':
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.todos
      });
    case FETCHING:
      return Object.assign({}, state, {isFetching: true});
    case SELECT_TODO:
      return Object.assign({}, state, {selectedId: action.id})

    // case 'TOGGLE_TODO':
    //   return Object.assign({}, state, {
    //     todos: state.todos.map((todo) => {
    //       return todo.id === action.id ?
    //         Object.assign({}, todo, {
    //           done: !todo.done
    //         }) : todo
    //     })
    //   });
    // case 'DELETE_TODO':
    //   return Object.assign({}, state, {
    //     todos: state.todos.filter((todo) => {
    //       return todo.id !== action.id
    //     })
    //   });
    default:
      return state;
  }
};
// let reducer = combineReducers(todos);
// export default reducer