import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemText } from 'material-ui/List';

import { Route, Link } from 'react-router-dom'

import TunePage from './TunePage'

// @todo Rename this if we have some kind of JSON naming convention.
import data from '../../data/tunes.json';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

// @todo Rename this to TunesList?
function TunesList(props) {
  const { classes } = props;

  const TunesListItems = data.map(function(tune, index) {
    return (
        <ListItem button key={ tune.id } component={ Link } to={ '/tune/' + tune.id } >
          <ListItemText primary={ tune.name } />
          <Route path={ '/tune/' + tune.id } component={ TunePage } />
        </ListItem>
    )
  })

  return (
    <div className={ classes.root } >
      <List>
        { TunesListItems }
      </List>
    </div>
  );
}

TunesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TunesList);