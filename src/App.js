import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: '',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    console.log(this.state);
  }

  toggleItem = itemId => {};

  handleDeleteEvent = () => {
    alert('delete todo on state');
  };

  handleAddEvent = (e, todoTask) => {
    e.preventDefault();
    const existing = this.state.todos.filter(todos => todos.task === todoTask);
    if (existing.length === 0) {
      const newTask = {
        name: todoTask,
        id: Date.now()
      };
      this.setState({
        todos: [...this.state.todos, newTask]
      });
    }
  };

  inputChangeHandler = event => {
    event.preventDefault();
    this.setState({ task: event.target.value });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addItem={this.handleAddEvent} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
