import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';

class App extends Component {
  

  clearFieldHandler = (event) => {
  this.setState({

  })
  }

  render() {
    return (
      <div className="App">
        <h1>Image Render App</h1>
        <h3>Input Width and Length Units to Generate a Preview</h3>
        <p>(Units are in inches)</p>
        <form id="dimensions">
          <UserInput />
          <UserInput />
        </form>
        <button>Submit</button>
        <button onClick={this.clearFieldHandler}>Clear</button>
      </div>
    );
  }
}

export default App;
