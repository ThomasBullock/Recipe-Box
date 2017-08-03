import { recipes } from './recipeData';

// Thanks to Dan Abromov! https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		// console.log(serializedState);
		if(serializedState === null) { // if localStorage is turned off
			return recipes;
		}
		// convert serialized data and if empty add our recipes
		const localData = JSON.parse(serializedState);
		return (!localData.recipes.length) ? recipes : JSON.parse(serializedState)
	} catch (err) {
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state); // serialize
		localStorage.setItem('state', serializedState);
		console.log('saving state')
	} catch (err) {
		console.error(err);
	}
}