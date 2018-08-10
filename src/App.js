import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Root>
        <BrowserRouter >
          <Route path="/login" component={Login} />
        </BrowserRouter >
      </Root>
    );
  }
}

export default App;
