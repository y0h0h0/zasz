import React, { Component } from 'react';

let store = {}, update = null;

export default (() => {
  let prxfy = {
    get (target,prop) {
      return (typeof target[prop] === 'object' && target[prop]) ? new Proxy(target[prop], prxfy) : target[prop]
    },
    set (target,prop,value) {
      target[prop] = value;
      if(update) update();
      return true
    }
  }
  return new Proxy(store, prxfy)
})()

export class Provider extends Component {
  componentWillMount = () => update = () => this.setState({})
  render = () => React.cloneElement(this.props.children)
}
