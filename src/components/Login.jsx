import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { userLogin } from '../actions/loginActions';

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
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' name='username' ref='username'/>
          <input type='password' name='password' ref='password'/>
          <input type='submit' value='submit'/>
        </form>
        <div>
          The user is
          <b>{this.props.auth !== null
              ? 'currently'
              : 'not'}</b>
          logged in.
        </div>
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
