import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

//Make store
import CombinedReducer from './reducer/combined.jsx'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	CombinedReducer,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware
		))
)

if (module.hot) {
  module.hot.accept('./reducer/combined.jsx', () => {
    const nextReducer = require('./reducer/combined.jsx').default;
    store.replaceReducer(nextReducer);
  });
}

export default store
