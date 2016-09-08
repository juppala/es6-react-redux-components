import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Button, ButtonToolbar} from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div>
        <Alert>Hello</Alert>
      <Button>I <Heart /> React!</Button>

      </div>
    )
    // return React.createElement('h1', null, 'I Love React!');
  }
}


const Heart = () => <span className="glyphicon glyphicon-heart"></span>


ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
