import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Dogs from './dogs'
import Cats from './cats'

class BrowserRouterLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/browser-router/dogs/">View Dogs</Link>
        <Link to="/browser-router/cats/">View Cats</Link>
        <Switch>
          <Route path='/browser-router/dogs/' component={Dogs} />
          <Route path='/browser-router/cats/' component={Cats} />
        </Switch>
      </div>
    );
  }
}

export default BrowserRouterLinks;
