import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import NotFound from './NotFound'

const styles = theme => ({
  root: {
    width: '100%',
    padding: '1em',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
  },
})

function TunePage(props) {
  const { classes, match, tunes } = props

  const tune = tunes.find(o => o.id === match.params.tuneId)

  if (typeof tune === 'undefined') {
    return (
      <NotFound />
    )
  }

  return (
    <div className={classes.root} >
      <h2>{tune.name}</h2>
      <Typography paragraph={true} >
        Tune file: {tune.file}
      </Typography>
      <Typography paragraph={true} >
        Tune config: {tune.config}
      </Typography>
      <Typography paragraph={true} >
        Tune score: {tune.score}
      </Typography>
      <Link to="/">
        <Button>Back to index</Button>
      </Link>
    </div>
  )
}

TunePage.propTypes = {
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TunePage))
