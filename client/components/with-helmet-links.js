import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import DogsRuleWithHelmet from './dogs-rule-with-helmet'
import CatsRuleWithHelmet from './cats-rule-with-helmet'

const WithHelmetLinks = () => (
  <div>
    <Helmet>
      <title>Using Helmet When Showing Components</title>
      <meta name="description" content="Helmet helps me out a lot with SEO." />
    </Helmet>
    <h1>Links To URIs that Show Components Using Helmet</h1>
    <Link to="/header/with-helmet/dogs-rule">Dogs Rule - With Helmet</Link> | 
    <Link to="/header/with-helmet/cats-rule">Cats Rule - With Helmet</Link>
    <Switch>
      <Route exact path='/header/with-helmet/dogs-rule' component={DogsRuleWithHelmet} />
      <Route exact path='/header/with-helmet/cats-rule' component={CatsRuleWithHelmet} />
    </Switch>
  </div>
);


export default WithHelmetLinks;
