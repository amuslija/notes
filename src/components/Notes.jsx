import React, { Component } from 'react';
import '../stylesheets/css/Notes.css';
import wrench from '../stylesheets/images/wrench.png';

class Notes extends Component {

  render() {
    return (
      <div className='Notes'>
        <img src={wrench} alt='wrench' />
        <textarea defaultValue={this.props.text} />
      </div>
    );
  }
}

export default Notes;
