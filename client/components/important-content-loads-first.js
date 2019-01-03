import React, { Component } from 'react';

class ImportantFirst extends Component {
  constructor() {
    super();
    this.state = {
      message1: '',
      message3: '',
      message5: '',
      image7: '',
      image9: '',
      image11: '',
    };
  }
  componentDidMount() {
    this.setState({
      message1: 'Message 1(immediately after component mounts): Googlebot will always crawl'
    });
    this.timeout = [];
    this.timeout.push(setTimeout(() => {
      this.setState({
        message3: 'Message 3 (2 sec): Googlebot will probably crawl'
      })
    }, 2000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        message5: 'Message 5 (4 sec): Googlebot may or may not crawl'
      })
    }, 4000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        image7: 'https://i.ytimg.com/vi/wB-r8OfIVVU/hqdefault.jpg'
      })
    }, 6000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        image9: 'https://media.giphy.com/media/cs9AnwADBj60g/giphy.gif'
      })
    }, 8000));
    this.timeout.push(setTimeout(() => {
      this.setState({
        image11: 'https://i.ytimg.com/vi/KMXnT73k6s8/hqdefault.jpg'
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
        <h1>Render Important Information First</h1>
        <h2>When Data takes a long time to load, try to render SEO-relevant text or info first.</h2>
        <h4>Boring Content: { this.state.message1 }</h4>
        <h4>Content that can wait...{ this.state.message3 }</h4>
        <h4>Nevermind reading this. { this.state.message5 }</h4>
        <h4>Cutest Pug Picture EVER: <br /><img src={ this.state.image7 } /></h4>
        <h4>A funny hedgehog gif you don't want to miss: <br /><img src={ this.state.image9 } /></h4>
        <h4>A Monkey in a Santa Hat?! <img src={this.state.image11} /></h4>
        
      </div>
    )
  }
}
export default ImportantFirst;
