import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Button, ButtonToolbar} from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = { stateTxt: 'This is state text' }
    //this.updateState = this.updateState.bind(this);//binding of updateState can be done anywhere before it has been invoked.
  }
  updateState(e) {
    this.setState({ stateTxt: e.target.value })
  }
  render() {
    let greet = this.props.greet;
    let age = this.props.age;
    console.log('greet->', greet);
    console.log('age. is required prop in App->', age);
    return (
      <div>
        <Alert>Hello</Alert>
        <div  style={{margin: 20}}>
          <div>Default property: <b>{this.props.defaultGreet}</b></div> or
          <div>DOM Property V1: <b>{this.props.greet}</b></div> or
          <div>DOM Property V2: <b>{greet}</b></div> or
          <div>State Variabls:
            <b>{this.state.stateTxt}</b></div> or

          {/*can be written as onChange={this.updateState.bind(this)} //need to bind the current App context to updateState handler */}
          <input type="text"
            onChange={(e) => this.updateState(e)} />
          <Button style={{margin: 10, marginBottom: 10}}>
            I <Heart message={this.state.stateTxt}/> React!
          </Button>
          <span> This is React Bootstrap Button</span>
        </div>
      </div>
    )
    // return React.createElement('h1', null, 'I Love React!');
  }
}

// Restrict the prop type.
App.propTypes = {
  defaultGreet: React.PropTypes.string,
  greet: React.PropTypes.string,
  age: React.PropTypes.number.isRequired //isRequired defines that age is required property.
}

App.defaultProps = {
  defaultGreet: 'Welcome to JavaScript'
}


// State less component.
const Heart = (props) => {
    return (
    <span className="glyphicon glyphicon-heart">{props.message}</span>
  )
}


ReactDOM.render(
  <App greet="Welcome to React!!" age={30}/>,
  document.getElementById('app')
)

export default App
