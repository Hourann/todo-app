import React, {Component} from 'react';

class TodoEditor extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <h1>Todo Editor</h1>
  }
}

// const mapStateToProps = state => {
//   let id = state.selectedId;
//   return state.todos.find(todo => todo.id == id);
// };
//
// export default connect(mapStateToProps)(TodoEditor);
export default TodoEditor