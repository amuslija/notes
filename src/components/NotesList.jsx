import React, { Component } from 'react';
import Notes from './Notes';

import '../stylesheets/css/NotesList.css';

class NotesList extends Component {

  componentDidMount() {
    this.props.onLoad(this.props.token);
  }

  render() {
    let { notes, token } = this.props;
    return (
      <div className='NotesList'>
        {notes.map(note => {
          return (<Notes key={note.id} text={note.text} id={note.id} onDelete={() => this.props.onDelete(token, note.id)}/>)
        })}
      </div>
    );
  }
}

export default NotesList;
