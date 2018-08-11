import React from 'react';
import { connect } from 'react-redux';
import AppCardsList from './common/AppCardsList';


class AppsDashboard extends React.Component {


    render() {
        const { apps, filter } = this.props;
        const renederedApps = apps && apps[filter] ?  apps[filter].data : [];

        return (
            <div>
                <AppCardsList apps={renederedApps} />
            </div>
        )
    }

};


export default connect(
    state => ({ apps: state.apps, filter: state.apps.filter })
)(AppsDashboard);