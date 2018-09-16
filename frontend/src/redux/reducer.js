import {combineReducers} from 'redux';

let todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return action.todos;
        //   return Object.assign({}, state, {
        //     todos: [{
        //       title: action.title,
        //       completed: false,
        //       id: getId(state)
        //     }, ...state.todos]
        //   })
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, {
                            done: !todo.done
                        }) : todo
                })
            });
        case 'DELETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                })
            });
        default:
            return state;
    }
};
let reducer = combineReducers(todos);
export default reducer