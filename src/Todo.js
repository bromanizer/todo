import React, { Component } from 'react';

class Todo extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event){
        event.preventDefault();
        this.props.deleteTodo(event.target.id);
    }

    render(){
        return(
            <div>
                <span>{this.props.content}</span>
                <button id={this.props.id} onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default Todo;