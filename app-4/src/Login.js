import React, { Component } from 'react';

class Login extends Component{

    constructor(){
        super();
        this.stat={
            userName:'',
            passWord:''
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleNameChange(name){
        this.setState({
            userName: name
        })
    }

    handlePassChange(pass){
        this.setState({
            passWord: pass
        })
    }

    handleLogin(){
        alert (`Username: ${ this.state.username } Password: ${ this.state.password }`);
        
    }

    render() {
        return(
            <div>
              <input onChange={(e)=> this.handleNameChange(e.target.value)}placeholder='USERNAME'/>
              <input onChange={(e)=> this.handlePassChange(e.target.value)}placeholder='PASSWORD'/>
              <button onClick={this.handleLogin}>LOGIN</button>  
            </div>
        );
    }
}

export default Login;