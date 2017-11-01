import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state={
    list: [
      'pizza',
      'milk',
      'butter',
      'bread'
    ]
  }
}



  render() {
    let listDisplay = this.state.list.map((element,index) => {
      return (
        <h1 key={index}>{element}</h1>
      )
    })
    return (
      <div className= 'App'>
        {listDisplay}
      </div>  
    );
  }
}

export default App;
