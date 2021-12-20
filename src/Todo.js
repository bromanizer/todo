import React, { Component } from "react";
import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditText = this.handleEditText.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deleteTodo(e.target.id);
  }

  handleEditClick() {
    this.setState((prevState) => ({
      showEdit: !prevState.showEdit
    }));
  }

  handleEditText(e) {
    e.preventDefault();
    this.props.editTodo(e.target.id, e.target.value);
  }

  render() {
    return (
      <div>
        {this.state.showEdit ? (
          <input
            id={this.props.id}
            type="text"
            defaultValue={this.props.content}
            onChange={this.handleEditText}
          ></input>
        ) : (
          <span>{this.props.content}</span>
        )}
        <button id={this.props.id} onClick={this.handleEditClick}>
          Edit
        </button>
        <button id={this.props.id} onClick={this.handleDeleteClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
