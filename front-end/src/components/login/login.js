import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
      	<h1>Get Blasted</h1>
        <a href='http://localhost:3000/auth'><button>Login/Register</button></a>
      </div>
    );
  }
}

export default Login;
