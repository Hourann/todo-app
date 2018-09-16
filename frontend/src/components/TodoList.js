import React, {Component} from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo__list">
      {

        this.props.todos.map((todo) => {
          console.log(todo);
          return <TodoItem key={todo.id} todo={todo} actions=
          {this.props.actions}/>
        })
      }
      </ul>
    )
  }
}


export default connect(state => state)(TodoList)
