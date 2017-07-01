import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getAllNotes, removeNotes } from '../actions/notes';
import NotesList from '../components/NotesList';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoad: getAllNotes,
  onDelete: removeNotes,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesList));
