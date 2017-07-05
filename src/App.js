import React, { Component } from 'react';
import logo from './logo.svg';
import chilli from './assets/img/2000px-Chilli_pepper_4.png';
import './App.css';
import AppBar from 'react-toolbox/lib/app_bar/AppBar.js';
import Button from 'react-toolbox/lib/button/Button';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';


    
class App extends Component {
  constructor(props) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      TimePicker: false
    }
  }

  buttonHandler() {
    this.setState({
      TimePicker: !this.state.TimePicker
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={chilli} className="App-logo" alt="logo" />
          <h2>Mots Curry Collection</h2>
        </div>
        <p className="App-intro">
          To get started, add a recipe.
        </p>
        <Button raised primary inverse onClick={this.buttonHandler}>Add Recipe</Button>
        <TimePicker active={this.state.TimePicker}>
        </TimePicker>
      </div>
    );
  }
}

export default App;
