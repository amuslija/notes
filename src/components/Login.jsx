import React, { Component } from 'react';
import '../stylesheets/css/Logic.css';

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(this.props.login);
    this.props.login(username, password);
  }

  render() {
    return (
      <div className='Login'>
        <h1 className='title'>notes.</h1>
        <form className='login-form' onSubmit={e => this.handleSubmit(e)}>
          <input type='text' name='username' ref='username' placeholder='name@email.com'/>
          <input type='password' name='password' ref='password' placeholder='*******'/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

export default Login;
