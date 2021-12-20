import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './todolist.css';
import { v4 as uuidv4 } from "uuid";

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
    const unique = `${newTodo}-${uuidv4()}`;
    this.setState((state) => ({
      todos: [
        ...state.todos,
        <Todo
          content={newTodo}
          id={unique}
          key={unique}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        ></Todo>,
      ],
    }));
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.key !== id),
    });
  }

  editTodo(id, newContent) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.key === id) {
        console.log(newContent);
        let newItem = Object.assign({}, item);
        newItem.content = newContent;
        return newItem;
      }
      return item;
    });
    updatedTodos.forEach(todo => console.log(todo));
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <p>A simple React ToDo List App</p>
        <hr></hr>
        <NewTodoForm
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        ></NewTodoForm>
        <ul>
          {this.state.todos.map((item) => (
            <li id={item.id} key={item.key} content={item.content}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
