import React from 'react';
import { connect } from 'react-redux';
import AppCardsList from './common/AppCardsList'
import appsActions from '../actions/apps_actions';

class Home extends React.Component {

    componentWillMount() {
        this.props.fetchApps()
        console.log('fetching apps')
    }

    render() {
        return (
            <div>
                <AppCardsList apps={[{a: 1}, {a: 2}, {a: 3}, {a: 4}]} />
            </div>
        )
    }
}


export default connect(
    state => ({apps: state.apps}),
    appsActions
)(Home);