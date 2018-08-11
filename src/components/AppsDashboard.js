import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppCardsList from './common/AppCardsList';
import AppsFilter from './common/AppsFilter';

import appsActions from '../actions/apps_actions';

class AppsDashboard extends React.Component {


    onChangeFilter(filter) {
        console.log('filter ', filter)
        this.props.fetchApps(filter);
    }

    render() {
        const { apps } = this.props;

        const {
            completedApps,
            inProgressApps,
            sharedApps,
            activeApps,
        } = this.props.apps.counts;

        const { filter } = apps;
        const filtersList = [
            {
                title: 'complete',
                value: 'complete',
                icon: 'check',
                count: completedApps
            },
            {
                title: 'In Progress',
                value: 'inprogress',
                icon: 'cog',
                count: inProgressApps
            },
            {
                title: 'Shared',
                value: 'shared',
                icon: 'share',
                count: sharedApps
            },
            {
                title: 'Active',
                value: 'active',
                icon: 'cog',
                count: activeApps
            },

        ]

        const renederedApps = apps && apps[filter] ? apps[filter].data : [];

        return (
            <div>
                <AppsFilter filters={filtersList} currentFilter={filter} onChangeFilter={(filter) => this.onChangeFilter(filter)} />
                {this.renderCardList(renederedApps)}
            </div>
        )
    }

    renderCardList(renederedApps) {
        const { classes } = this.props;

        if (this.props.apps.loading) {
            return (
                <div className={classes.loadingContainer} >
                    <CircularProgress size={100} />
                </div>
            )
        }

        return (
            <AppCardsList apps={renederedApps} />
        );
    }

};

const styles = theme => ({
    loadingContainer: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(
    state => ({ apps: state.apps }),
    appsActions
)(
    withStyles(styles)(AppsDashboard)
);