import { configureStore } from "@reduxjs/toolkit";
import userSliderReducer from "../features/feed/userSlider";

export const store = configureStore({
	reducer: {
		userSlider: userSliderReducer,
	},
});
