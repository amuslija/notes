import React, { Component } from 'react';
import '../stylesheets/css/AddText.css';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
class AddText extends Component {

  render() {
    return (
      <div className='AddText'>
        <input type='text' name='text' onClick={() => this.props.onClick()}/>
        <button type='button' name='add text' value='+' />
      </div>
    )
  }
}

export default withRouter(connect()(AddText));
