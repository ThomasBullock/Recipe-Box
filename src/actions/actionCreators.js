import * as actionTypes from './actionTypes';
import { recipes } from '../data/recipeData'; 

export function getRecipes() {
	return function(dispatch) {
		dispatch({
			type: 'GET_RECIPES',
			recipes
		})
	}
}

export function addRecipe(recipe) {
	console.log(recipe)
	return function(dispatch) {
		dispatch({
			type: 'ADD_RECIPE',
			recipe
		})
	}
}

export function editRecipe(recipe, index) {
	console.log(recipe)
	return function(dispatch) {
		dispatch({
			type: 'EDIT_RECIPE',
			recipe,
			index
		})
	}
}

export function deleteRecipe(index) {
	console.log('action delete')
	return function(dispatch) {
		dispatch({
			type: 'DELETE_RECIPE',
			index
		})
	}

}
