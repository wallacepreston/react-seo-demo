import React from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import DogsRuleWithHelmet from './dogs-rule-with-helmet'
import CatsRuleWithHelmet from './cats-rule-with-helmet'

const WithHelmetLinks = () => (
  <div>
    <Link to="/header/with-helmet/dogs-rule">Dogs Rule - With Helmet</Link> | 
    <Link to="/header/with-helmet/cats-rule">Dogs Rule - With Helmet</Link>
    <Switch>
      <Route exact path='/header/with-helmet/dogs-rule' component={DogsRuleWithHelmet} />
      <Route exact path='/header/with-helmet/cats-rule' component={CatsRuleWithHelmet} />
    </Switch>
  </div>
);


export default WithHelmetLinks;
