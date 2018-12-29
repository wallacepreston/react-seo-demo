import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import DogsRuleNoHelmet from './dogs-rule-no-helmet'
import CatsRuleNoHelmet from './cats-rule-no-helmet'

const NoHelmetLinks = () => (
  <div>
    <h1>Links To URIs that Show Components WITHOUT Using Helmet</h1>
    <Link to="/header/no-helmet/dogs-rule">Dogs Rule - No Helmet</Link> | 
    <Link to="/header/no-helmet/cats-rule">Cats Rule - No Helmet</Link>
    <Switch>
      <Route exact path='/header/no-helmet/dogs-rule' component={DogsRuleNoHelmet} />
      <Route exact path='/header/no-helmet/cats-rule' component={CatsRuleNoHelmet} />
    </Switch>
  </div>
);


export default NoHelmetLinks;
