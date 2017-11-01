import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state={
        filterFood: '',
        food:[
          'pizza',
          'bread',
          'milk',
          'butter',
          'coke'
        ]
      }
  }

  handleChange(filter){
    this.setState({
      filterFood: filter
    });
  }


  render() {
      let foodsToDisplay = this.state.food.filter((element,index)=>{
        return element.includes(this.state.filterFood);
      }).map((element,index)=>{
        return <h1 key={index}>{element}</h1>
      })
    return (
      <div className= 'App'>
        <input onChange={(e)=> this.handleChange(e.target.value)} placeholder='Input Here'/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
