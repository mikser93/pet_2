import React, { Component } from 'react';
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from './components/ToDoList';
import initialTodos from './todos.json';
import Container from './components/Container';
import Form from 'components/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <Counter initialValue={10}/> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>All tasks to do:{totalTodoCount}</p>
          <p>Complited tasks:{completedTodoCount}</p>
        </div>
        <TodoList todos={todos} OnDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

export default App;
