import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',

  
  initialState: {
    notes: [],
  },


  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
  },

  
});
export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export const selectNotes = (state) => state.notes.notes;
export default notesSlice.reducer;
// This slice manages the notes state, allowing for adding, deleting, and updating notes.