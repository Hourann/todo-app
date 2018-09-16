import React, {Component} from 'react';
import actions from "../redux/actions"
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class TodoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.todo}
  }

  render() {
    const {title, description, done, expire_date, priority} = this.state;

    return <form>Todo Editor

      <br/>
      <input type="text" value={title}
             onChange={event => this.setState({title: event.target.value})}/><br/>

      <textarea value={description}
                onChange={event => this.setState({description: event.target.value})}></textarea><br/>

      <label>Done<input type="checkbox" checked={done}
                        onChange={event => this.setState({done: !done})}/>
      </label><br/>

      <label>Expired at<input type="datetime-local" defaultValue={expire_date}
                              onChange={event => this.setState({expire_date: event.target.value})}/>
      </label><br/>

      <Button bsStyle="success" onClick={event => {
        console.log("TodoEditorState", this.state);
        this.props.updateTodo(this.state);
        event.preventDefault();

      }}>submit</Button>
      <Button onClick={this.props.cancelSelection}>cancel</Button>
    </form>
  }
}

const mapStateToProps = state => {
  let id = state.selectedId;
  return {todo: state.todos.find(todo => todo.id === id)};
};

const mapDispatchToProps = dispatch => ({
  updateTodo: todo => dispatch(actions.updateTodo(todo)),
  cancelSelection: () => dispatch(actions.cancelSelection())
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor);

