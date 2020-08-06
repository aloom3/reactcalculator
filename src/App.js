
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  KEYS from './keys.js';
import  ANSWERS from './result.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }
  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "C") {
      this.clear();
    }
    else if (button === "CE") {
      this.lastInput()
    }
    else {
      this.setState({
        result: this.state.result + button 
      })
    }
  };
  calculate = () => {
    var checkResult = this.state.result;

    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "Something went wrong! Please fix it!"
        })

    }
};

//Clears the result completely
//Called when the C is hit 
clear = () => {
    this.setState({
        result: ""
    })
  };
//Removes the last input 
lastInput = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};
render() {
  return (
      <div className = "app">
          <div className="calculator-body">
              <h1 className = "para"> Calculate some things </h1>
              <ANSWERS result={this.state.result}/>
              <KEYS onClick={this.onClick}/>
              <h1 className = "para"> Made by akul, checkout my <a href ="https://www.akulloom.com/"> website </a></h1>
          </div>
      </div>
  );
}
}

export default App;
