import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
	name: "play",
	initialState: {
		isPlaying: false,
		song: "",
	},
	reducers: {
		play: (state) => {
			state.isPlaying = true;
		},

		pause: (state) => {
			state.isPlaying = false;
		},

		setSong: (state, action) => {
			state.song = action.payload;
		},
	},
});

export { playSlice };
export const { play, pause, setSong } = playSlice.actions;
export default playSlice.reducer;
