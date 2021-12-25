import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './todolist.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  editTodo(id, newContent) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, task: newContent };
      }
      return item;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo} 
        />
      );
    })
    return (
      <div>
        <h1>ToDo List</h1>
        <p>A simple React ToDo List App</p>
        <hr></hr>
        <NewTodoForm
          addTodo={this.addTodo}
        ></NewTodoForm>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
