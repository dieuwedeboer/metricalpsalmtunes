import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import List, { ListItem, ListItemText } from 'material-ui/List'
import { Route, Link } from 'react-router-dom'
import TunePage from './TunePage'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

// TunesList or TuneList?
// Convert back to a simple component if all "state" is handled by Redux?
class TunesList extends React.Component {
  constructor(properties, context) {
    super(properties, context)
  }

  render() {
    const { classes, tunes } = this.props;

    const TunesListItems = tunes.map(function(tune, index) {
      return (
        <ListItem button key={tune.id} component={Link} to={'/tune/' + tune.id} >
          <ListItemText primary={tune.name} />
          <Route path={'/tune/' + tune.id} component={TunePage} />
        </ListItem>
      )
    })

    return (
      <div className={classes.root} >
        <List>
          {TunesListItems}
        </List>
      </div>
    )
  }
}

TunesList.propTypes = {
  classes: PropTypes.object.isRequired,
  tunes: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    tunes: state.tunes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // We have no dispatch events here.
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TunesList))
