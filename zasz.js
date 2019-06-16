import React, { Component } from 'react';

let store = {}, update = null;

const magic = () => {
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
}
export default magic();

export class Provider extends Component {
  constructor() {super();update = () => this.setState({})}
  render() {
    const a = React.Children.map(this.props.children, c => {return React.cloneElement(c)});
    return (a[0]);
  }
}
