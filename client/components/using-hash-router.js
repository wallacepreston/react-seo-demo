import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import HashLinks from './hash-links'

class UsingHashRouter extends Component {
  render() {
    return (
      <div>
        <h1>Hash Router</h1>
        <HashRouter>
          <HashLinks />
        </HashRouter>
      </div>
    );
  }
}

export default UsingHashRouter;
