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
              <TodoEditor/> :
              <TodoItem key={todo.id} {...todo} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}


export default connect(state => state)(TodoList)
