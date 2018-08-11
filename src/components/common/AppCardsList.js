import React from 'react';
import PropTypes from 'prop-types';
import AppCard from './AppCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

class AppCardsList extends React.Component {


    render() {
        const { apps } = this.props;

        return (
            <Grid container >
                {
                    apps && apps.length > 0 ?
                        this.renderApps() :
                        this.renderNoContent()

                }
            </Grid>
        )
    }

    renderApps() {
        return this.props.apps.map(app => {
            return (
                <Grid key={app._id} item xs={12} md={6} lg={6} >
                    <AppCard app={app} />
                </Grid>
            )
        })
    }

    renderNoContent() {
        const { classes } = this.props;
        return (
            <Grid className={classes.noContentContainer} >
                <h2>No content available</h2>
            </Grid>
        )
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
    noContentContainer: {
        width: '100%',
        textAlign: 'center',
        color: 'gray'
    }
});

export default withStyles(styles)(AppCardsList);