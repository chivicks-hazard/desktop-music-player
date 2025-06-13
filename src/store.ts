import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./slices/playSlice";

export default configureStore({
	reducer: {
		play: playReducer,
	},
});
