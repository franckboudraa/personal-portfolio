import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux'

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Header />

          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>

          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
