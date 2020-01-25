import React, { Component } from 'react'

class UserOutput extends Component {

    style = {
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "space-around",
        "width": "30%",
        "border": "1px solid black",
        "margin": "0px auto",
        "padding": "5px"
    };
    
    render() {
        return (
            <div style={this.style}>
                <p>{this.props.username}</p>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default UserOutput;