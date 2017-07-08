// import { asyncGetNotes, asyncCreateNotes, asyncDeleteNotes } from '../api/firebase';
import * as NotesApi from '../api/notes-api';

export const importNotes = (notes) => {
  return {
    type: 'IMPORT_NOTES',
    notes
  }
}

export const addNotes = (text, id) => ({
  type: 'ADD_NOTES',
  id,
  text
});

export const updateNotes = (id, text) => ({
  type: 'UPDATE_NOTES',
  id,
  text
});

export const deleteNotes = (id) => ({
  type: 'DELETE_NOTES',
  id
});

export const getAllNotes = (token) => (dispatch) => {
  NotesApi.getNotes(token).then(notes => {
    dispatch(importNotes(notes));
  });
}

export const postNotes = (token, text) => (dispatch) => {
  NotesApi.postNotes(token, text).then(notes => {
    dispatch(addNotes(notes.text, notes.id));
  })
}

export const removeNotes = (token, id) => {
  return (dispatch) => (
    NotesApi.deleteNotes(token, id).then(id => dispatch(deleteNotes(id)))
  );
};
