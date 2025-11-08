import { HashRouter, Route, Routes } from "react-router-dom";
import Player from "./Player";
import Albums from "./pages/Albums";
import AllTracks from "./pages/AllTracks";
import Artists from "./pages/Artists";
import Genre from "./pages/Genre";
import Home from "./pages/Home";

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Player />}>
					<Route index element={<Home />} />
					<Route path="all-tracks" element={<AllTracks />} />
					<Route path="albums" element={<Albums />} />
					<Route path="genre" element={<Genre />} />
					<Route path="artists" element={<Artists />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRoutes;
