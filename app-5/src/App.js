import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Image from './Image.js';

class App extends Component {
  render() {
    return (
      <div classNjame="App">
        <Image myImage={'http://via.placeholder.com/350x150'}/>
      </div>
    );
  }
}

export default App;
