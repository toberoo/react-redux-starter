import {combineReducers} from 'redux'
import CounterReducer from './counter.jsx'

export default combineReducers({
	counter: CounterReducer
})
