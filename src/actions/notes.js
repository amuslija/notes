import { asyncGetNotes, asyncCreateNotes, asyncDeleteNotes } from '../api/firebase';

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

export const getAllNotes = () => (dispatch) => {
  asyncGetNotes().then(notes => {
    dispatch(importNotes(notes));
  });
}

export const postNotes = (text) => (dispatch) => {
  asyncCreateNotes(text).then(notes => {
    dispatch(addNotes(notes.text, notes.id));
  })
}

export const removeNotes = (id) => (dispatch) => (
  asyncDeleteNotes(id).then(id => dispatch(deleteNotes(id)))
);
