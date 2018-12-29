import React, { Component } from 'react';

class IncrementalLoading extends Component {
  constructor() {
    super();
    this.state = {
      message1: '',
      message2: '',
      message3: '',
      message4: '',
      message5: '',
    };
  }
  componentDidMount() {
    this.setState({
      message1: 'Message 1(immediately after component mounts): Googlebot will always crawl'
    })
    setTimeout(() => {
      this.setState({
        message2: 'Message 2 (100ms): Googlebot will almost certainly crawl'
      })
    }, 100);
    setTimeout(() => {
      this.setState({
        message3: 'Message 3 (2 sec): Googlebot may or may not crawl'
      })
    }, 2000);
    setTimeout(() => {
      this.setState({
        message4: 'Message 4 (3sec): Googlebot may or may not crawl'
      })
    }, 3000);
    setTimeout(() => {
      this.setState({
        message5: 'Message 5 (10 sec): Googlebot definitely will NOT crawl'
      })
    }, 10000);
  }
  render() {
    return (
      <div>
        <h1>Incrementally Loaded Data</h1>
        <h4>{ this.state.message1 }</h4>
        <h4>{ this.state.message2 }</h4>
        <h4>{ this.state.message3 }</h4>
        <h4>{ this.state.message4 }</h4>
        <h4>{ this.state.message5 }</h4>
        
      </div>
    )
  }
}
export default IncrementalLoading;
