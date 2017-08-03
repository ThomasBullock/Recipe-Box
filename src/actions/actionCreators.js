// import * as actionTypes from './actionTypes'; // it appears this is not needed
import { recipes } from '../data/recipeData'; 

// this action has been made redundant as we get recipes from localStorage
export function getRecipes() {  
	return function(dispatch) {
		dispatch({
			type: 'GET_RECIPES',
			recipes: recipes.recipes
		})
	}
}

export function addRecipe(recipe) {
	return function(dispatch) {
		dispatch({
			type: 'ADD_RECIPE',
			recipe
		})
	}
}

export function editRecipe(recipe, index) {
	return function(dispatch) {
		dispatch({
			type: 'EDIT_RECIPE',
			recipe,
			index
		})
	}
}

export function deleteRecipe(index) {
	return function(dispatch) {
		dispatch({
			type: 'DELETE_RECIPE',
			index
		})
	}

}
