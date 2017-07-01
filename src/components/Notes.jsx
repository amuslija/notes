import React, { Component } from 'react';
import '../stylesheets/css/Notes.css';

class Notes extends Component {

  handleOnClick() {
    this.props.onDelete();
  }

  render() {
    return (
      <div className='Notes'>
        <button onClick={() => this.handleOnClick()}>X</button>
        <textarea defaultValue={this.props.text} />
      </div>
    );
  }
}

export default Notes;
