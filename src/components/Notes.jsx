import React, { Component } from 'react';
import '../stylesheets/css/Notes.css';
import wrench from '../stylesheets/images/wrench.png';

class Notes extends Component {

  handleOnClick() {
    let { id } = this.props;
    this.props.onDelete();
    // console.log(this.props);
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
