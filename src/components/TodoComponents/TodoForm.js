import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const TodoForm = props => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValiidate autoComplete="off">
      <div>
        <TextField
          onChange={props.handleTodoChange}
          type="text"
          name="todo"
          value={props.value}
          placeholder="todo"
          id="standard-basic"
          className={classes.textField}
          label="Standard"
          margin="normal"
        />
      </div>

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
