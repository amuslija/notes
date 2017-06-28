import React, { Component } from 'react';
import '../stylesheets/css/AddText.css';

class TitleBar extends Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className='AddText'>
        <div className='title'>notes.</div>
        <input className='input-field' type='text' name='text' />
        <button name='add text' onClick={() => this.props.onClick()}>+</button>
      </div>
    )
  }
}

export default TitleBar;
