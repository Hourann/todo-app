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

    return <form className="todo__editor alert alert-info">
      <h4 className="alert-heading">Todo Editor</h4>
      <br/>

      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title:</label>
        <div className="col-sm-10">

          <input type="text" value={title} className="form-control"
                 onChange={event => this.setState({title: event.target.value})}/>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Description: </label>
        <div className="col-sm-10">

        <textarea className="form-control" value={description}
                  onChange={event => this.setState({description: event.target.value})}></textarea>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Done:</label>
        <div className="col-sm-10">
          <input type="checkbox" checked={done}
                 onChange={event => this.setState({done: !done})}/>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Priority:</label>
        <div className="col-sm-10">
          <select className="form-control" value={priority}
                  onChange={event => this.setState({priority: event.target.value})}>
            <option value="H">HIGH</option>
            <option value="N">NORMAL</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Expired at:</label>
        <div className="col-sm-10">
          <input className="form-control" type="datetime-local" defaultValue={expire_date}
                 onChange={event => this.setState({expire_date: event.target.value})}/>
        </div>
      </div>

      <div align="right">
        <Button bsStyle="success" onClick={event => {
          console.log("TodoEditorState", this.state);
          this.props.updateTodo(this.state);
          event.preventDefault();

        }}>submit</Button>
        <Button onClick={this.props.cancelSelection}>cancel</Button>
      </div>
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

