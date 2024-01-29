import { createSlice } from "@reduxjs/toolkit";

// create a slice
const uiSlice = createSlice({
	name: "ui",
	initialState: { isCartVisible: false },
	reducers: {
		toggle(state) {
			state.isCartVisible = !state.isCartVisible;
		},
	},
});

// create action creator
export const uiActions = uiSlice.actions;

export default uiSlice;