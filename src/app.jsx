import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import store from './store.jsx'
import Root from './container/root.jsx'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./container/root.jsx', () => {
    const NextRoot = require('./container/root.jsx').default;
    render(NextRoot)
  });
}

