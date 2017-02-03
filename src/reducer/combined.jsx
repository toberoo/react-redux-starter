import {combineReducers} from 'redux'
import { routeReducer } from 'redux-simple-router'

//Entry point for all of our reducers. When you create a new reducer make sure to add it here. The store takes
//the combined reducers to handle all dispatched actions.
const reducers = {
	routing: routeReducer,
	counter: require('./counter.jsx')
};
module.exports = combineReducers(reducers)