import React, { Component } from 'react';
import Todo from './Todo';

class NewTodoForm extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(text) {
        this.props.addTodo(text);
    }

    render() {
        return (
            <div>
                {this.props.list.map(item => {
                    <input type="number"></input>
                })}
                <form onSubmit={this.handleSubmit}>
                    <input type="text"></input>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }

}

export default NewTodoForm;