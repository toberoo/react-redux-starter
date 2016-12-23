//Get react stuff
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.jsx'

//Load the home html so it appears in our dist folder when bundled.
require('./index.html')

//Get the router stuff
import { Router, Route, browserHistory } from 'react-router'

//Get the root container
import Root from './container/root.jsx'

/**
 * Provider is a react-redux element that can take our store and make sure all the sub elements get the
 * state and actions from the store. We also can define what parts of the app are rendered based on the route here.
 */
render(
  <Provider store={store}>
      <Router history={ browserHistory}>
        	<Route path="/" component={Root}>
        	</Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
