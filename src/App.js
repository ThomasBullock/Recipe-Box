import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import chilli from './assets/img/2000px-Chilli_pepper_4.png';
import * as actionCreators from './actions/actionCreators';
import './App.css';

// import components
import AddRecipe from './AddRecipe';

// react tool box
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import Dialog from 'react-toolbox/lib/dialog/Dialog';

  
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
    this.props.deleteRecipe(i);
  }

  render() {
    const recipeList = this.props.recipes.map( (item, i) => {
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
            <AddRecipe label='Edit' edit={true} recipe={ {
            	'index': i, 
            	'title': item.title, 
            	'ingredients' : item.ingredients, 
            	'img' : item.img  
            } } editRecipe={this.props.editRecipe}/>
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
        
        <AddRecipe label='Add Recipe' addRecipe={this.props.addRecipe}/>
        
        <TimePicker active={this.state.TimePicker}>
        </TimePicker>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		recipes: state.recipes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
