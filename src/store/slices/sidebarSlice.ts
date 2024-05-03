import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isCollapsed: false,
    selectedNavName: "Home",
};
export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.isCollapsed = action.payload;
        },
        setSidebarNavName: (state, action) => {
            state.selectedNavName = action.payload;
        }
    },
});

export default sidebarSlice.reducer;
export const { setSidebar, setSidebarNavName } = sidebarSlice.actions;