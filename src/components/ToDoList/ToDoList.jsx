import React from 'react';
import './ToDoList.css';

const TodoList = ({ todos, OnDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li className="TodoList__item" key={id}>
        <p className="TodoList__text">{text}</p>
        <button onClick={()=> OnDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
export default TodoList;
 