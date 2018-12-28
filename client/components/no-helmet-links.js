import React from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import DogsRuleNoHelmet from './dogs-rule-no-helmet'
import CatsRuleNoHelmet from './cats-rule-no-helmet'

const NoHelmetLinks = () => (
  <div>
    <Link to="/header/no-helmet/dogs-rule">Dogs Rule - No Helmet</Link> | 
    <Link to="/header/no-helmet/cats-rule">Dogs Rule - No Helmet</Link>
    <Switch>
      <Route exact path='/header/no-helmet/dogs-rule' component={DogsRuleNoHelmet} />
      <Route exact path='/header/no-helmet/cats-rule' component={CatsRuleNoHelmet} />
    </Switch>
  </div>
);


export default NoHelmetLinks;
