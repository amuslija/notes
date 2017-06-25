import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { userLogin } from '../actions/loginActions';
import '../stylesheets/css/Logic.css';

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let { username, password } = this.refs;
    if (username.value === 'adnan' && password.value === 'muslija') {
      this.props.userLogin();
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <div className='Login'>
        <h1 className='title'>Notes.</h1>
        <form className='login-form' onSubmit={e => this.handleSubmit(e)}>
          <input type='text' name='username' ref='username' placeholder='name@email.com'/>
          <input type='password' name='password' ref='password' placeholder='*******'/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userLogin
}, dispatch);
Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
