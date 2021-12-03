import React, { Component } from 'react';

class Todo extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        
    }

    render(){
        return(
            <div>
                <span>{this.props.content}Hi</span>
                <button onClick={this.handleClick}>Hallo</button>
            </div>
        )
    }
}

export default Todo;