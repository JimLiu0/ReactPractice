import React, { Component } from 'react';
import './App.css';

import Button from './Button/Button';
import StyledParagraph from './StyledParagraph/StyledParagraph';

class App extends Component {

  styles = [
    'bold',
    'green',
    'italic'
  ];

  state = {
    'styles': this.convertArrayToObjectWithElementsAsKeys(this.styles)
  };

  styleToggleHandler(styleName) {

    const styles = {...this.state.styles};
    styles[styleName] = !styles[styleName];

    this.setState({
      'styles': styles
    });
  }

  convertArrayToObjectWithElementsAsKeys(arr) {
    const obj = {};

    for (const element of arr) {
      obj[element] = false;
    }

    return obj;
  }

  render() {

    const buttons = this.styles.map((text, index) => {
      return <Button text={ (this.state.styles[text] ? 'Toggle off ' : 'Toggle on ') + text} 
                     key={index} clicked={this.styleToggleHandler.bind(this, text)}></Button>
    });

    const classes = this.styles.filter(style => {
      return this.state.styles[style] === true;
    })
    .join(" ");

    return (
      <div className="App">
        { buttons }
        <StyledParagraph className={classes}></StyledParagraph>
      </div>
    );
  }
}

export default App;
