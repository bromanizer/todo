import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state = {todos: ["First thing"]};
    }

    addTodo(content) {
        this.setState = [...this, content];
    }

    render() {
        return (
            <div>
                <NewTodoForm addTodo={this.addTodo} list={this.state.todos}></NewTodoForm>
            </div>
        )
    }
}

export default ToDoList;