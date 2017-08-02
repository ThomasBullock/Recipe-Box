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
import * as actionCreators from './actions/actionCreators';
import './assets/react-toolbox/theme.css';

// Load Recipe Items or set default Recipe Items
const recipes = {};

store.dispatch(actionCreators.getRecipes());

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
    	<App />
  	</ThemeProvider>
  </Provider>	
	, document.getElementById('root'));
registerServiceWorker();
