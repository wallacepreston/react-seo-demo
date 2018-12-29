import React, { Component } from 'react';
import First from './first'
import Second from './second'

class BadComponentSwitching extends Component {
  constructor(){
    super()
    this.state = {
      active: 'FIRST'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
      let active = this.state.active;
      let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
      this.setState({
          active: newActive
      });
  }

  render() {

      let active = this.state.active;

      return (
          <div>
              <h1>The Wrong Way to Switch Between Components</h1>
              {active === 'FIRST' ? (
                  <First />
                  ) : active === 'SECOND' ? (
                      <Second />
                      ) : null}
              <h3>I wonder why the URI doesn't change...</h3>
              <button type="button" onClick={this.handleClick}>
                  Toggle
              </button>
          </div>
      );

   }
}

export default BadComponentSwitching;
