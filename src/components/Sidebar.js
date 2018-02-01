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
  listFull: {
    width: 'auto',
  },
};

class Sidebar extends React.Component {
  constructor(properties, context) {
    super(properties, context)

    // @todo Can we "nativise" the sidebar state handles?
  }

  render() {
    const { classes } = this.props;

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
        <Drawer open={this.props.sidebarOpen} onClose={this.props.handleSidebar} >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.handleSidebar}
            onKeyDown={this.props.handleSidebar}
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
  // @todo expand this with the passed sidebarhandles?
}

export default withStyles(styles)(Sidebar);
