import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeIndex: 0,
};

const userSliderSlice = createSlice({
	name: "userSlider",
	initialState,
    reducers: {
        updateUserSliderState: (state, action) => {
          return { ...state, ...action.payload };
        },
      },
});

export const { updateUserSliderState } = userSliderSlice.actions;
export default userSliderSlice.reducer;

export const selectActiveIndex = (state) => state.userSlider.activeIndex;

