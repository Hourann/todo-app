import React, {Component} from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import TodoEditor from './TodoEditor';

class TodoList extends Component {
  render() {
    return (
      <ul className="todo__list">
        {

          this.props.todos.map((todo) => {
            return todo.id === this.props.selectedId ?
              <TodoEditor key={todo.id}/> :
              <TodoItem key={todo.id} {...todo} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  switch (state.order) {
    case "ID":
      state.todos.sort((b, a) => a.id - b.id);
      return state;
    default:
      return state;
  }
}

export default connect(mapStateToProps)(TodoList)
