import PlayingBar from "./components/PlayingBar";
import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Player = () => {
	return (
		<div className="h-dvh">
			<div className="w-10/12 absolute right-0">
				<Outlet />
			</div>
			<Sidebar />
			<PlayingBar />
		</div>
	);
};

export default Player;
