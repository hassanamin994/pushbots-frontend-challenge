import React from 'react';
import { Provider } from 'react-redux';
import { store, } from './store';

export default class Root extends React.Component {

    render() {
        return (

            <Provider store={store} >
                {this.props.children}
            </Provider>
        )
    }
}