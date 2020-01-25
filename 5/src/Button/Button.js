import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: lavender
`;

class Button extends Component{
    render() {
        return (
            <StyledButton onClick={this.props.clicked}>{this.props.text}</StyledButton>
        );
    }
}

export default Button;