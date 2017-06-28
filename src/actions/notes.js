import { asyncGetNotes } from '../api/firebase';

export const importNotes = (notes) => {
  console.log(notes);
  return {
    type: 'IMPORT_NOTES',
    notes
  }
}

export const addNotes = (text) => ({
  type: 'ADD_NOTES',
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
