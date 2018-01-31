import React from 'react'

import { MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles'
import { blue, amber } from 'material-ui/colors'

import { Route, Switch } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'

import SimpleAppBar from './SimpleAppBar'
import Tunes from './Tunes'
import Tune from './Tune'
import NotFound from './NotFound'

class App extends React.Component {
  constructor(properties, context) {
    super(properties, context)

    this.muiTheme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: amber,
      },
      status: {
        danger: 'orange',
      },
    })

    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.muiTheme}>
        <header>
          <SimpleAppBar />
        </header>

        <section id="content">
          <Switch>
            <Route exact path='/' component={ Tunes } />
            <Route path='/tune/:tuneId' component={ Tune } />
            <Route component={ NotFound } />
          </Switch>
        </section>

        <footer>
          <p>&copy; Public Domain</p>
        </footer>
      </MuiThemeProvider>
    )
  }
}

export default App
