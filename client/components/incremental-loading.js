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
      message6: '',
      message7: '',
      message8: '',
      message9: '',
      message10: '',
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
        message5: 'Message 5 (4 sec): Googlebot definitely will NOT crawl'
      })
    }, 4000);
    setTimeout(() => {
      this.setState({
        message6: 'Message 6 (5 sec): Googlebot definitely will NOT crawl'
      })
    }, 5000);
    setTimeout(() => {
      this.setState({
        message7: 'Message 7 (6 sec): Googlebot definitely will NOT crawl'
      })
    }, 6000);
    setTimeout(() => {
      this.setState({
        message8: 'Message 8 (7 sec): Googlebot definitely will NOT crawl'
      })
    }, 7000);
    setTimeout(() => {
      this.setState({
        message9: 'Message 9 (8 sec): Googlebot definitely will NOT crawl'
      })
    }, 8000);
    setTimeout(() => {
      this.setState({
        message10: 'Message 10 (9 sec): Googlebot definitely will NOT crawl'
      })
    }, 9000);
    setTimeout(() => {
      this.setState({
        message11: 'Message 11 (10 sec): Googlebot definitely will NOT crawl'
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
        <h4>{ this.state.message6 }</h4>
        <h4>{ this.state.message7 }</h4>
        <h4>{ this.state.message8 }</h4>
        <h4>{ this.state.message9 }</h4>
        <h4>{ this.state.message10 }</h4>
        <h4>{ this.state.message11 }</h4>
        
      </div>
    )
  }
}
export default IncrementalLoading;
