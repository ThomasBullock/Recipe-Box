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

    this.state = {
      TimePicker: false
    }
    this.buttonHandler = this.buttonHandler.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

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

  deleteRecipe(e, i) {
    console.log(e.target);
    console.log(i);
  }

  render() {
    const recipeList = this.props.data.map( (item, i) => {
      return(
        <Card key={i} raised style={{width: '350px', margin: '1.5em'}}>
          <CardMedia
            aspectRatio="wide"
            image={item.img}
          />
          <CardTitle style={{'justifyContent': 'center' }}
            title={item.title}
            // subtitle="Subtitle here"
          />
          <CardText>{item.ingredients[0]}, {item.ingredients[1]}</CardText>
          <CardActions style={{'justifyContent': 'space-between' }}>
            <Button label="Edit" />
            <Button label="Delete" onClick={ (e) => this.deleteRecipe(e, i) }/>
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
