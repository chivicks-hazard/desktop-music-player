import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
	name: "play",
	initialState: {
		isPlaying: false,
	},
	reducers: {
		play: (state) => {
			state.isPlaying = true;
		},

		pause: (state) => {
			state.isPlaying = false;
		},
	},
});

export { playSlice };
export const { play, pause } = playSlice.actions;
export default playSlice.reducer;
