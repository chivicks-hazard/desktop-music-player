// import { Router } from "../lib/electron-router-dom.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Player from "./Player";
import Home from "./pages/Home";

const AppRoutes = () => {
	console.log(window.location.pathname);

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Player />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRoutes;
