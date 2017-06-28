import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllNotes } from '../actions/notes';
import TitleBar from '../components/TitleBar';

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onLoad: getAllNotes,
  onClick: getAllNotes
}, dispatch);

const AddNotesBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleBar));
export default AddNotesBar;
