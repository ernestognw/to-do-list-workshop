import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello world <span aria-label="emoji" role="img">🔥</span></h1>
        <input type="text" className="new-task"/>
      </div>
    );
  }
}

export default App;
