import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TitleBar from '../components/TitleBar';
import { postNotes } from '../actions/notes';

const mapStateToProps = state => ({
  token: state.user.token
});

const mapDispatchToProps = dispatch => bindActionCreators({
  postNotes
}, dispatch);

const AddNotesBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleBar));

export default AddNotesBar;
