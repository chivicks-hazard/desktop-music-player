import { createContext, RefObject, useRef } from "react";
import PlayingBar from "./components/PlayingBar";
import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const AudioRefContext = createContext<RefObject<HTMLAudioElement> | null>(null);

const Player = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	return (
		<div className="h-dvh">
			<AudioRefContext.Provider value={audioRef}>
				<div className="w-10/12 absolute right-0">
					<Outlet />
				</div>
				<Sidebar />
				<PlayingBar />
			</AudioRefContext.Provider>
		</div>
	);
};

export { Player as default, AudioRefContext };
