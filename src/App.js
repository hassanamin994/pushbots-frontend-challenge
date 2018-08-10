import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Root>
        <BrowserRouter >
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/" component={Home} /> */}
          </Switch>
        </BrowserRouter >
      </Root>
    );
  }
}

export default App;
