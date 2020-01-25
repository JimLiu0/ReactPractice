import React, { Component } from 'react'
import './UserInput.css';

class UserInput extends Component {
    render() {
        return (
            <div className="user-input">
                <div>
                    <p>Enter your username:</p>
                    <input type="text" value={this.props.username} onChange={this.props.usernameChange}></input>
                </div>
                <div>
                    <p>Enter your age:</p>
                    <input type="number" value={this.props.age} onChange={this.props.ageChange}></input>
                </div>
            </div>
        );
    }
}

export default UserInput;