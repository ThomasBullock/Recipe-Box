function recipes(state = [], action) {
	const i = action.index;

	switch(action.type) {
		case 'GET_RECIPES' : 
			return action.recipes;
		case 'ADD_RECIPE' : 
			return [
				...state, action.recipe
			]
			state;
		case 'EDIT_RECIPE' :
			console.log('edit the recipe');
			return [
				...state.slice(0, i),
				action.recipe,	
				...state.slice(i + 1)
			]
		case 'DELETE_RECIPE' : 
			console.log('reducer delete');
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			]					
		default :
			return state; 
	}
}

export default recipes;