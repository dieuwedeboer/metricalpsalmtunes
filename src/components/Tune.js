import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Link } from 'react-router-dom'

// @todo This needs to be in the app state to be passed around.
import data from '../../data/tunes.json';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Tune(props) {
  const { classes, match } = props;

  return (
    <div>
      <h2>{ match.params.tuneId }</h2>
      <Link to="/">Return to tunes listing</Link>
    </div>
  );
}

Tune.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tune);
