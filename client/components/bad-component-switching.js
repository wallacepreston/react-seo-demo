import React, { Component } from 'react';
import First from './first'
import Second from './second'

class BadComponentSwitching extends Component{
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
              {active === 'FIRST' ? (
                  <First />
              ) : active === 'SECOND' ? (
                  <Second />
              ) : null}
              <button type="button" onClick={this.handleClick}>
                  Toggle
              </button>
          </div>
      );

   }

};

export default BadComponentSwitching;
