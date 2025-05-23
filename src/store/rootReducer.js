import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from '../features/notes/NotesSlice';
import languageReducer from '../features/language/LanguageSlice';

const rootReducer = combineReducers({
  // Add your slices here
  // Example: notes: notesReducer,
  language: languageReducer,
  notes: notesReducer,
});
export default rootReducer;