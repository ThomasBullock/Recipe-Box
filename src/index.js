import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { recipes } from './recipeData'; 
import registerServiceWorker from './registerServiceWorker';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';

// Load Recipe Items or set default Recipe Items


ReactDOM.render(
	<ThemeProvider theme={theme}>
    	<App data={recipes}/>
  	</ThemeProvider>
	, document.getElementById('root'));
registerServiceWorker();
