import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from '../components/Login';
import { asyncLogin } from '../actions/login.js';
import { withRouter } from 'react-router'

const mapStateToProps = (state) => ({ message: state.message });
const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: asyncLogin,
}, dispatch);

const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
export default Login;
