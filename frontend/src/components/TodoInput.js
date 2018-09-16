import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.title !== '') {
      this.props.addTodo(this.state.title)
      //reset input box
      this.setState({
        title: ''
      })
    }
  }

  render() {
    return (
      <div className="todo__input form-group row ">
        <div className="col-sm-10">
          <input className="form-control form-control-lg"
                 type="text"
                 placeholder="title.."
                 required={true}
                 value={this.state.title}
                 onChange={this.handleTitleChange.bind(this)}
          />
        </div>

        <div className="col-sm-2">
          <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)} block>Add</Button>
        </div>
      </div>
    )
  }
}

export default TodoInput