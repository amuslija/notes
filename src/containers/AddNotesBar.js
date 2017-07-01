import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TitleBar from '../components/TitleBar';
import { postNotes, removeNotes } from '../actions/notes';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  postNotes
}, dispatch);

const AddNotesBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleBar));

export default AddNotesBar;
