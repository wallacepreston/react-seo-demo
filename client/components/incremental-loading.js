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
    this.timeout = []
    this.timeout.push(setTimeout(() => {
      this.setState({
        message2: 'Message 2 (500ms): Googlebot will almost certainly crawl'
      })
    }, 500));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message3: 'Message 3 (2 sec): Googlebot will probably crawl'
      })
    }, 2000))
    this.timeout.push(setTimeout(() => {
      this.setState({
        message4: 'Message 4 (3sec): Googlebot less likely to crawl'
      })
    }, 3000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message5: 'Message 5 (4 sec): Googlebot may or may not crawl'
      })
    }, 4000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message6: 'Message 6 (5 sec): Googlebot MIGHT crawl'
      })
    }, 5000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message7: 'Message 7 (6 sec): Googlebot probably will NOT crawl'
      })
    }, 6000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message8: 'Message 8 (7 sec): Googlebot almost certainly will NOT crawl'
      })
    }, 7000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message9: 'Message 9 (8 sec): Googlebot definitely will NOT crawl'
      })
    }, 8000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message10: 'Message 10 (9 sec): Googlebot is on to the next page by now.'
      })
    }, 9000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message11: 'Message 11 (10 sec): If you\'re seeing this, you\'re definitely not Google.'
      })
    }, 10000));
  }
  componentWillUnmount(){
    while (this.timeout.length) {
      clearTimeout(this.timeout.pop())
    }
  }
  render() {
    return (
      <div>
        <h1>Data Loaded</h1>
        <h2>Simulates data that takes differing amounts of time to fetch.</h2>
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
