import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Dogs from './dogs'
import Cats from './cats'

class BrowserRouterLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/routing/browser-router/dogs/">View Dogs</Link> | 
        <Link to="/routing/browser-router/cats/">View Cats</Link>
        <Switch>
          <Route path='/routing/browser-router/dogs/' component={Dogs} />
          <Route path='/routing/browser-router/cats/' component={Cats} />
        </Switch>
      </div>
    );
  }
}

export default BrowserRouterLinks;
