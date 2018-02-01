import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

import App from './components/App'

import express from 'express'

let app = express()

// Material-UI user-agent.
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Serve static files from the 'public' folder
app.use(express.static('public'))

// GET /
app.get('*', function (req, res) {
  // Create a new Redux store instance
  const store = createStore(reducer)

  const preloadedState = store.getState()

  res.render('layout', {
    // The server responds to the initial request by pre-rendering the
    // application using a static router.
    content: ReactDOMServer.renderToString(
      <Provider store={store}>
        <Router location={req.url} context={res}>
          <App />
        </Router>
      </Provider>
    ),
    preloadedState: JSON.stringify(preloadedState).replace(/</g, '\\u003c'),
  })
})

// Start server
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
})
