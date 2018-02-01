import React from 'react'

import { MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles'
import { blue, amber } from 'material-ui/colors'

import Reboot from 'material-ui/Reboot'
import Typography from 'material-ui/Typography'

import AppToolbar from './AppToolbar'
import Routes from './Routes'

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
        <Reboot />
        <header>
          <AppToolbar />
        </header>

        <section id="content">
          <Routes />
        </section>

        <footer>
          <Typography>&copy; Public Domain</Typography>
        </footer>
      </MuiThemeProvider>
    )
  }
}

export default App
