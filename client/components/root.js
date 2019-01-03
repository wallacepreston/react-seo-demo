import React, { Component } from 'react';


import NavBar from './nav-bar'
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="justify-content-center">
          <div className="col text-center"> 
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
