const React = require('react');

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
module.exports = magic();

module.exports.Provider = class Provider extends React.Component {
  constructor(props) {
    super(props);
    const ths = props.ctx ? props.ctx : this;
    update = () => ths.setState({})
  }
  render() {
    const a = React.Children.map(this.props.children, c => {return React.cloneElement(c)});
    return (a[0]);
  }
}
