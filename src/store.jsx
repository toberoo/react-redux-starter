import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from './reducer/combined.jsx'
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

//The router middleware let's change the url in the application. It also gives us a way
//to deal with routing changes as actions.
const reduxRouterMiddleware = syncHistory(browserHistory)
const store = createStore(
	combinedReducer, {}, applyMiddleware(
		thunkMiddleware, //Thunk middleware is nessecary for dispatching async actions.
		reduxRouterMiddleware
	)
)
reduxRouterMiddleware.listenForReplays(store)

export default store
