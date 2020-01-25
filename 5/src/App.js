import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button';
import StyledParagraph from './StyledParagraph/StyledParagraph';

class App extends Component {

  buttonTexts = [
    'Toggle Bold',
    'Toggle Green',
  ]

  boldHandler() {
    
  }

  render() {

    const buttons = this.buttonTexts.map((text, index) => {
      return <Button text={text} key={index}></Button>
    });

    return (
      <div className="App">
        { buttons }
        <StyledParagraph></StyledParagraph>
      </div>
    );
  }
}

export default App;
