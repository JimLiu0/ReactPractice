import React, { Component } from 'react';
import '../App.css'

class StyledParagraph extends Component {
    render() {
        return <p className={this.props.className}>This is a paragraph</p>
    }
}

export default StyledParagraph;