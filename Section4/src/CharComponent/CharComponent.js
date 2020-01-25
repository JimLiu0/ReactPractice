import React, { Component } from 'react';
import './CharComponent.css';

class CharComponent extends Component {
    render() {
        return (
            <div className="inline-box" onClick={this.props.removeChar}>
                { this.props.char }
            </div>
        );
    }
}

export default CharComponent;