const note = (state = {}, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_NOTES':
      return {
        id: action.id,
        text: action.text,
      };
    case 'UPDATE_NOTES':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}

export const notes = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'IMPORT_NOTES':
      console.log(action.notes);
      return [
        ...state,
        ...action.notes,
      ];
    case 'ADD_NOTES':
      return [
        ...state,
        note(undefined, action),
      ];
    case 'UPDATE_NOTES':
      return state.map(note => {
        if (note.id === action.id) {
          return note(note, action);
        }
        return note;
      });
    case 'DELETE_NOTES':
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}
