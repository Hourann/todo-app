import React, {Component} from 'react'
import {connect} from 'react-redux';
import actions from '../redux/actions';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      done: this.props.done,
    }
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
    this.setState({
      checked: !this.state.checked
    })
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleEdit() {
    this.props.actions.editTodo(this.props.todo.id)
  }

  handleUpdate() {
    if (this.state.title !== '') {
      this.props.actions.updateTodo(this.props.todo.id,
        this.state.title)
    }
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleDueDateChange(event) {
    console.log(event);
    this.setState({
      dueDate: event
    })
  }

  handleSelect(event) {
    console.log(this.props, this.state)
    // selectTodo(this.props.id)
  }

  handleToggle(e) {

  }

  render(state) {
    return (
      <li className="todo__item">
        <input type="checkbox"
               defaultChecked={this.state.done}
               required={true}
               onClick={() => this.props.selectTodo(this.props.id)}/>
        <input type="text"
               onClick={this.handleToggle.bind(this)}
               required={true}
               placeholder='title'
               value={this.state.title}/>
        <button onClick=
                  {this.handleDelete.bind(this)}>Delete
        </button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  selectTodo: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  selectTodo: id => dispatch(actions.selectTodo(id))
});


export default connect(state => state, mapDispatchToProps)(TodoItem)
