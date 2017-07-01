import React, { Component } from 'react';
import Notes from './Notes';

import '../stylesheets/css/NotesList.css';

class NotesList extends Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    let { notes } = this.props;
    return (
      <div className='NotesList'>
        {notes.map(note => (<Notes key={note.id} text={note.text} id={note.id} onDelete={() => this.props.onDelete(note.id)}/>))}
      </div>
    );
  }
}

export default NotesList;
