import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTask: ''
    };
  }
  handleChanges = e => {
    this.setState({ todoTask: e.target.value });
    console.log(this.state.todoTask);
  };
  handleSubmit = e => {
    this.props.addTodo(e, this.state.todoTask);
    this.setState({ todoTask: '' });
  };
  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" task="todo" value={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
