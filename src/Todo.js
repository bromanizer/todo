import React, { Component } from "react";
import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      task: this.props.task
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditText = this.handleEditText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDeleteClick() {
    this.props.deleteTodo(this.props.id);
  }

  handleEditClick() {
    this.setState((prevState) => ({
      showEdit: !prevState.showEdit
    }));
  }

  handleEditText(e) {
    e.preventDefault();
    this.props.editTodo(this.props.id, this.state.task);
    this.handleEditClick();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <li>
        {this.state.showEdit ? (
          <form onSubmit={this.handleEditText}>
            <input
              value={this.state.task}
              name="task"
              type="text"
              onChange={this.handleChange}
            ></input>
            <button>
              Save
            </button>
          </form>
        ) : (
          <div>
            <span>{this.props.task}</span>
            <button onClick={this.handleEditClick}>
              Edit
            </button>
            <button id={this.props.id} onClick={this.handleDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default Todo;
