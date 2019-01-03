import React from 'react';
import {Switch, Route} from 'react-router-dom'

import UrlBadLoader from './bad-component-switching'
import UsingHashRouter from './using-hash-router'
import UsingBrowserRouter from './using-browser-router'
import NoHelmetLinks from './no-helmet-links'
import WithHelmetLinks from './with-helmet-links'
import IncrementalLoading from './incremental-loading';
import ImportantFirst from './important-content-loads-first';
import Home from './home'
import NotFound from './NotFound'

const Routes = () => (
  <Switch>
    <Route path='/routing/bad-component-switching' component={UrlBadLoader} />
    <Route path='/routing/hash-router' component={UsingHashRouter} />
    <Route path='/routing/browser-router' component={UsingBrowserRouter} />
    <Route path='/header/no-helmet/' component={NoHelmetLinks} />
    <Route path='/header/with-helmet/' component={WithHelmetLinks} />
    <Route path='/async-stuff/incremental-loading/' component={IncrementalLoading} />
    <Route path='/async-stuff/important-content/' component={ImportantFirst} />
    <Route exact path='/' component={Home} />
    <Route path='*' component={NotFound} />
  </Switch>
);

export default Routes;
