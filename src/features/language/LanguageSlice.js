import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({ 
    name: "language",
    initialState: { 
        selectedLanguage: "en",
    },
    reducers:{
        selectedLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        }
    }
});
export const { selectedLanguage } = languageSlice.actions;
export default languageSlice.reducer;