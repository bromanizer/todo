import React, { Component } from "react";
import Todo from "./Todo";
import "./newtodoform.css";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid() });
    this.setState({ task: "" });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New ToDo</label>
        <input
          id="task"
          name="task"
          value={this.state.task}
          type="text"
          onChange={this.handleChange}
          placeholder="New Todo"
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default NewTodoForm;
