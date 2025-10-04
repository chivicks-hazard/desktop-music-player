import { HashRouter, Route, Routes } from "react-router-dom";
import Player from "./Player";
import Albums from "./pages/Albums";
import AllTracks from "./pages/AllTracks";
import Home from "./pages/Home";

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Player />}>
					<Route index element={<Home />} />
					<Route path="all-tracks" element={<AllTracks />} />
					<Route path="albums" element={<Albums />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRoutes;
