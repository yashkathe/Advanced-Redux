import { createSlice } from "@reduxjs/toolkit";

// create a slice
const uiSlice = createSlice({
	name: "ui",
	initialState: { isCartVisible: false, notification: null },
	reducers: {
		toggle(state) {
			state.isCartVisible = !state.isCartVisible;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

// create action creator
export const uiActions = uiSlice.actions;

export default uiSlice;
