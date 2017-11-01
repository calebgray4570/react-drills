import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo.js';

class App extends Component{

  constructor(){
    super();
      
        this.state={
          list: [],
          input: ''
        }
      this.hanleAddTask = this.hanleAddTask.bind(this)
    }
  
  handleInputChange(val){
    this.setState({
      input: val
    })
  }

  hanleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  
 
  render(){
      let list = this.state.list.map((element,index) => {
        return(
          <Todo key={index} task={element}/>
        )
      })


    return(
      <div className='App'>
        <h1>MY TO-DO LIST:</h1>

          <input onChange={(e) => this.handleInputChange(e.target.value)}
          value={this.state.input}
          placeholder='Enter task here'/>
          <button onClick={this.hanleAddTask}>ADD</button>
          {list}

      </div>
    )
  }
}

export default App;