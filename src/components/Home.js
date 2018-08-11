import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppsDashboard from './AppsDashboard';
import Navbar from './Navbar';
import appsActions from '../actions/apps_actions';

class Home extends React.Component {

    componentWillMount() {
        if (this.props.auth.authenticated) {
            this.props.fetchApps()
        }
    }

    render() {
        if (!this.props.auth.authenticated) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                <Navbar />
                <AppsDashboard />
            </div>
        )
    }
}


export default connect(
    state => ({apps: state.apps, auth: state.auth}),
    appsActions
)(Home);