import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

import Sidebar from './Sidebar'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// @todo Rename this to "Titlebar"
class AppToolbar extends React.Component {
  constructor(properties, context) {
    super(properties, context)

    this.state = {
      auth: true,
      anchorEl: null,
      sidebarOpen: false,
    }

    // @todo Make this a toggleSidebar function.
    this.handleSidebar = event => {
      this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
    // @todo Attempt without this to see what happens.
    this.handleSidebar.bind(this)

    this.handleChange = (event, checked) => {
      this.setState({ auth: checked })
    }

    this.handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    this.handleClose = () => {
      this.setState({ anchorEl: null })
    }
  }

  render() {
    const { classes } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton} color="inherit" aria-label="Menu"
              onClick={this.handleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Sidebar handleSidebar={this.handleSidebar} sidebarOpen={this.state.sidebarOpen} />
      </div>
    );
  }
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolbar);
