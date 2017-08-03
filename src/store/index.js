import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { loadState, saveState } from '../data/localStorage';

const enhancers = [];
const middleware = [
	thunkMiddleware,
];

const persistedState = loadState();

// Used if we initialize state with getRecipes request in ../index.js
// const initialState = {
// 	recipes: []
// }

// connect redux dev tools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
	rootReducer,
	persistedState,
	composedEnhancers
)

store.subscribe( () => {
  saveState(store.getState());
});



export default store;