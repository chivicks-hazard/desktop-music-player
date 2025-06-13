// import { Router } from "../lib/electron-router-dom.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Player from "./Player";
import Home from "./pages/Home";
import AllTracks from "./pages/AllTracks";

const AppRoutes = () => {
	console.log(window.location.pathname);
	console.log(window.location.hash);

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Player />}>
					<Route index element={<Home />} />
					<Route path="all-tracks" element={<AllTracks />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRoutes;
