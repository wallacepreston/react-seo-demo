import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Dogs from './dogs'
import Cats from './cats'

class HashLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/dogs/">View Dogs</Link> | 
        <Link to="/cats/">View Cats</Link>
        <Switch>
          <Route path='/dogs' component={Dogs} />
          <Route path='/cats' component={Cats} />
        </Switch>
      </div>
    );
  }
}

export default HashLinks;
