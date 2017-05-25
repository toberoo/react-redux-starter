import React from 'react'
import { Provider } from 'react-redux'

//Get the router stuff
import { BrowserRouter as Router, Route} from 'react-router-dom'

//Get the containers
import Layout from './layout.jsx'

class Root extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Provider store={this.props.store}>
				<Router>
					<Route path="/" component={Layout}/>
				</Router>
			</Provider>
		)
	}
}

export default Root
