import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// store requires reducer as arguments
const store = configureStore({
	reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
