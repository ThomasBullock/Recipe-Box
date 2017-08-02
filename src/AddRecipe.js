import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';

class AddRecipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			index: null,
			title: '',
			img: '',
			ingredients: ''
		}

		this.handleToggle = this.handleToggle.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	componentDidMount() {
		// console.log(this.props)
		// if (this.props.label === 'edit') {
		// 	console.log('set state!')
		// 	this.setState({
		// 		title: this.props.recipe.title,
		// 		img: this.props.recipe.img,
		// 		ingredients: this.props.recipe.ingredients.join(', '),
		// 		index: this.props.recipe.index
		// 	})
		// }
	}

	handleToggle() {
		if (this.props.label === 'Edit') {
			this.setState({
				title: this.props.recipe.title,
				active : !this.state.active,
				img: this.props.recipe.img,
				ingredients: this.props.recipe.ingredients.join(', '),
				index: this.props.recipe.index
			})
		}	else {
			this.setState({
				active : !this.state.active
			})
		}	
	}



	handleForm(value, name) {
		this.setState({...this.state, [name]: value});
		console.log(name, value)
	}

	handleSave() {
		if(this.props.label === 'Edit') {
			this.props.editRecipe({
				'title' : this.state.title,
				'ingredients' : this.state.ingredients.split(',').map( (word) => word.trim() ),
				'img' : this.state.img				
			}, this.state.index)
		} else {
			this.props.addRecipe({
				'title' : this.state.title,
				'ingredients' : this.state.ingredients.split(',').map( (word) => word.trim() ),
				'img' : this.state.img
			});			
		}
			this.handleToggle();
	}

	render() {
		return(
			<div>
				<Button label={this.props.label} onClick={this.handleToggle} />
			  <Dialog
			  	actions = {[{ label: "Cancel", onClick: this.handleToggle }, { label: "Save", onClick: this.handleSave }]}
          title='Add Recipe'
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}          
        >
          <p>Add ingredients seperated by commas.</p>

	        <Input type='text' label='Recipe Name' name='title' value={this.state.title} onChange={ (e) => this.handleForm(e, 'title') }  maxLength={40 } />
	        <Input type='text' label='Image URL' name='img' value={this.state.img} onChange={ (e) => this.handleForm(e, 'img') } />
	        <Input type='text' label='Ingredients' name='ingredients' value={this.state.ingredients} onChange={ (e) => this.handleForm(e, 'ingredients') } />
       
        </Dialog>
			</div>
		)
	}
}

export default AddRecipe;