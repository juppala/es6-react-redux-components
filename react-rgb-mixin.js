import React from 'react';
import ReactDOM from 'react-dom';

class ReactRBGMixin extends React.Component {
  constructor() {
    super()
    this.state = {
      red: 128,
      green: 128,
      blue: 128
    }
    //this.updateState = this.updateState.bind(this)
  }
  updateState(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.range).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.range).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.range).value
    })
  }
  render() {
    return (
      <div style={{margin: 10, marginBottom:30}}>
        <Slider ref="red" updateSlider={(e) => this.updateState(e)} />
        <br />
        <Slider ref="green" updateSlider={(e) => this.updateState(e)} />
        <br />
        <Slider ref="blue" updateSlider={(e) => this.updateState(e)} />
        <br />
        <div>Red: {this.state.red}, Green: {this.state.green}, Blue: {this.state.blue}</div>
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input
          ref="range"
          type="range"
          min="0"
          max="255"
          style={{width:256}}
          onChange={this.props.updateSlider} />
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRBGMixin />,
  document.getElementById('react-rgb-mixin')
)

export default ReactRBGMixin
