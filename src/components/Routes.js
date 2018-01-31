import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Route, Switch } from 'react-router-dom'

import TunesList from './TunesList'
import TunePage from './TunePage'
import NotFound from './NotFound'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Routes(props) {
  const { classes, match } = props;

  return (
    <Switch>
      <Route exact path='/' component={ TunesList } />
      <Route path='/tune/:tuneId' component={ TunePage } />
      <Route component={ NotFound } />
    </Switch>
  );
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);
