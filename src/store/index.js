import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancers = [];
const middleware = [
	thunkMiddleware,
];

const initialState = {
	recipes: []
}

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
	initialState,
	composedEnhancers
)

export default store;