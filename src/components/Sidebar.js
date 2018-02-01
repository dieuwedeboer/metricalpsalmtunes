import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Link } from 'react-router-dom'

import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Drawer from 'material-ui/Drawer';

const styles = {
  list: {
    width: 250,
  },
};

class Sidebar extends React.Component {
  constructor(properties, context) {
    super(properties, context)
  }

  render() {
    const { classes, toggleSidebar, sidebarOpen } = this.props;

    const NavList = (
      <div className={classes.list} >
        <List></List>
        <ListItem button component={Link} to='/' >
          <ListItemText primary="Tunes" />
        </ListItem>

        <Divider />

        <ListItem button >
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button >
          <ListItemText primary="Settings" />
        </ListItem>

        <List></List>
      </div>
    )

    return (
      <div>
        <Drawer open={sidebarOpen} onClose={toggleSidebar} >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleSidebar}
            onKeyDown={toggleSidebar}
          >
            {NavList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Sidebar);
