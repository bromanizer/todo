import React, { Component } from "react";
import Todo from "./Todo";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          Your new item: 
          <input id="todo" name="todo" value={this.state.todo} type="text" onChange={this.handleChange}/>
        </label>
        <button>Add Item</button>
      </form>
    );
  }
}

export default NewTodoForm;
