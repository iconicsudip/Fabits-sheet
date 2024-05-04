import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sheetOpen: true,
};
export const sheetSlice = createSlice({
    name: "sheet",
    initialState: initialState,
    reducers: {
        setSheet: (state, action) => {
            state.sheetOpen = action.payload;
        }
    },
});

export default sheetSlice.reducer;
export const { setSheet } = sheetSlice.actions;