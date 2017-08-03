import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { recipes } from './recipeData'; 
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import store from './store';

import './assets/react-toolbox/theme.css';

// Load Recipe Items or set default Recipe Items
// removed this getRecipes request as we get recipes from local storage
// import * as actionCreators from './actions/actionCreators'; 
// store.dispatch(actionCreators.getRecipes()); 

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
    	<App />
  	</ThemeProvider>
  </Provider>	
	, document.getElementById('root'));
registerServiceWorker();
