import React, { Component } from 'react';
import logo from './logo.svg';
import chilli from './assets/img/2000px-Chilli_pepper_4.png';
import './App.css';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';
import { Card, CardMedia, CardTitle, CardText, CardActions }from 'react-toolbox/lib/card';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';


    
class App extends Component {
  constructor(props) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      TimePicker: false
    }
  }

  componentDidMount() {
    this.setState({
      recipes: this.props.data
    })
  }

  buttonHandler() {
    this.setState({
      TimePicker: !this.state.TimePicker
    })
  }

  render() {
    const recipeList = this.props.data.map( (item, i) => {
      return(
        <Card raised style={{width: '350px'}}>
          <CardMedia
            aspectRatio="wide"
            image={item.img}
          />
          <CardTitle
            title={item.title}
            // subtitle="Subtitle here"
          />
          <CardText>{item.ingredients[0]}, {item.ingredients[1]}</CardText>
          <CardActions>
            <Button label="Action 1" />
            <Button label="Action 2" />
          </CardActions>
        </Card>
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={chilli} className="App-logo" alt="logo" />
          <h2>Mots Curry Collection</h2>
        </div>
        <p className="App-intro">
          To get started, add a recipe.
        </p>
        <main>
          {recipeList}  
        </main>
        
        <Button raised primary inverse onClick={this.buttonHandler}>Add Recipe</Button>
        
        <TimePicker active={this.state.TimePicker}>
        </TimePicker>
      </div>
    );
  }
}

export default App;
