import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import UrlBadLoader from './bad-component-switching'
import UsingHashRouter from './using-hash-router'
import UsingBrowserRouter from './using-browser-router'
import NavBar from './nav-bar'
import NoHelmetLinks from './no-helmet-links'
import WithHelmetLinks from './with-helmet-links'
import IncrementalLoading from './incremental-loading';
import ImportantFirst from './important-content-loads-first';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="justify-content-center">
          <div className="col text-center"> 
            <Switch>
              <Route path='/routing/bad-component-switching' component={UrlBadLoader} />
              <Route path='/routing/hash-router' component={UsingHashRouter} />
              <Route path='/routing/browser-router' component={UsingBrowserRouter} />
              <Route path='/header/no-helmet/' component={NoHelmetLinks} />
              <Route path='/header/with-helmet/' component={WithHelmetLinks} />
              <Route path='/async-stuff/incremental-loading/' component={IncrementalLoading} />
              <Route path='/async-stuff/important-content/' component={ImportantFirst} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
