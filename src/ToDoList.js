import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
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
        ></Todo>,
      ],
    }));
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.key !== id),
    });
  }

  render() {
    return (
      <div>
        <NewTodoForm
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        ></NewTodoForm>
        <ul>
          {this.state.todos.map((item) => (
            <li id={item.id} key={item.key}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
