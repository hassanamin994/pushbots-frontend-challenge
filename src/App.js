import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store';
import Root from './Root';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Root>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter >
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter >
        </PersistGate>
      </Root>
    );
  }
}

export default App;
