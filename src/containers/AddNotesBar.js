import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TitleBar from '../components/TitleBar';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const AddNotesBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleBar));

export default AddNotesBar;
