import {CANCEL_SELECTION, FETCHING, RECEIVE_TODOS, SELECT_TODO} from "./actions";

export default function reducer(state = {
  todos: null,
  visibility: 'SHOW_ALL',
  order: 'ID',
  isFetching: false,
  selectedId: null
}, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.todos
      });
    case FETCHING:
      return Object.assign({}, state, {isFetching: true});
    case SELECT_TODO:
      return Object.assign({}, state, {selectedId: action.id});
    case CANCEL_SELECTION:
      return Object.assign({}, state, {selectedId: null});
    default:
      return state;
  }
};
// let reducer = combineReducers(todos);
// export default reducer