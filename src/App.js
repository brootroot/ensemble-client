import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}
