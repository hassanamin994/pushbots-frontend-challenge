import React from 'react';
import PropTypes from 'prop-types';
import AppCard from './AppCard';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core';

class AppCardsList extends React.Component {


    render() {
        
        return (
            <Grid container >
                {
                    this.renderApps()
                
                }
            </Grid>
        )
    }

    renderApps() {
        return this.props.apps.map(app => {
            return (
                <Grid key={app.a} item xs={12} md={4} lg={4} >
                    <AppCard app={app} />
                </Grid>
            )
        })
    }

}

AppCardsList.propTypes = {
    apps: PropTypes.arrayOf(Object)
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(AppCardsList);