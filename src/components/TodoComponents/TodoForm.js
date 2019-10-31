import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const TodoForm = props => {
  const classes = useStyles();
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="todo"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.handleAddTodo}
      >
        Add Todo
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.handleClearTodos}
      >
        Clear Completed
      </Button>
    </form>
  );
};

export default TodoForm;
