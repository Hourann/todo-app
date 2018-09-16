import React, {Component} from 'react'
import {connect} from 'react-redux';
import actions from '../redux/actions';
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap';

const styleFinished = {
  textDecoration: "line-through",
  color: "#ccc"
};
const styleImportant = {
  fontWeight: "bold",
  color: "#f00"
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      done: this.props.done,
      priority: this.props.priority
    }
  }

  render() {
    let style = {};
    const {done, priority} = this.state;
    if (priority === "H") {
      Object.assign(style, styleImportant);
      console.log(style);
    }
    if (done)
      Object.assign(style, styleFinished);

    return (
      <li className="todo__item">
        <input type="checkbox"
               onClick={() => this.props.selectTodo(this.props.id)}/>
        <span
          onClick={() => {
            this.setState({done: !this.state.done});
            this.props.toggleTodo(this.props.id)
          }}
          style={style}
        >{this.state.title}</span>
        <Button bsStyle="danger" bsSize="small" className="delete__button"
                onClick=
                  {() => this.props.deleteTodo(this.props.id)}>Delete
        </Button>
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
