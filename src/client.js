import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

import App from './components/App'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState)

// The client replaces the server pre-rendered response with a browser router
// by hydrating the application state.
// @todo Redux says to use 'hydrate', but we get an error.
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main')
)
