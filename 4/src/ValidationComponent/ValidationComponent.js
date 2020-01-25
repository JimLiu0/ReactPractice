import React, { Component } from 'react';

class ValidationComponent extends Component {

    render() {
        let textLengthOutput = '';

        if (this.props.length > 5) {
            textLengthOutput = 'Text long enough';
        } else {
            textLengthOutput = 'Text too short';
        }

        return (
            <div>
                <p> { textLengthOutput } </p>
            </div>
        )
    }
}

export default ValidationComponent;