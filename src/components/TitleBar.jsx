import React, { Component } from 'react';
import '../stylesheets/css/AddText.css';

class TitleBar extends Component {

  handleClick() {
    const text = this.refs.text.value;
    console.log(text);
  }

  render() {
    return (
      <div>
        <div className='AddText'>
          <div className='title'>notes.</div>
          <input className='input-field' type='text' name='text' ref='text'/>
          <button name='add text' onClick={this.handleClick.bind(this)}>+</button>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TitleBar;
