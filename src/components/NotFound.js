import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function NotFound(props) {
  const { classes } = props;
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>We could not find the page your were looking for.</p>
      <Link to="/">Return home</Link>
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
