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

  render(state) {
    return (
      <li className="todo__item">
        <input type="checkbox"
               onClick={() => this.props.selectTodo(this.props.id)}/>
        <span
          onClick={() => {
            this.setState({done: !this.state.done});
            this.props.toggleTodo(this.props.id)
          }}
          style={{
            textDecoration: this.state.done ? "line-through" : "none"
          }
          }
        >{this.state.title}</span>
        <button onClick=
                  {() => this.props.deleteTodo(this.props.id)}>Delete
        </button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  selectTodo: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(actions.deleteTodo(id)),
  selectTodo: id => dispatch(actions.selectTodo(id)),
  toggleTodo: id => dispatch(actions.toggleTodo(id))
});

export default connect(state => state, mapDispatchToProps)(TodoItem)
