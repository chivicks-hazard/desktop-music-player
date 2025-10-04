import { GiMusicSpell } from "react-icons/gi";
import { IoMdAlbums } from "react-icons/io";
import { IoHome, IoPerson } from "react-icons/io5";
import { PiMusicNotesBold } from "react-icons/pi";
import { RiPlayListFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	// const con

	return (
		<nav>
			<div className="fixed left-0 top-0 h-[90%] bg-[#232323] w-2/12 px-5 pr-5 pl-1 text-slate-100">
				<h1 className="text-3xl font-medium p-3 mx-auto">Sidebar</h1>

				<div className="flex flex-col items-start justify-between gap-2 mt-5 w-full">
					<NavLink
						id="home"
						to={"/"}
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<IoHome className="text-3xl" />
						<span className="font-medium">Home</span>
					</NavLink>
					<NavLink
						id="allMusic"
						to={"all-tracks"}
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<PiMusicNotesBold className="text-3xl" />
						<span className="font-medium">All Tracks</span>
					</NavLink>
					<NavLink
						to={"albums"}
						id="albums"
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<IoMdAlbums className="text-3xl" />
						<span className="font-medium">Albums</span>
					</NavLink>
					<div
						id="genre"
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<GiMusicSpell className="text-3xl" />
						<span className="font-medium">Genre</span>
					</div>
					<div
						id="artist"
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<IoPerson className="text-3xl" />
						<span className="font-medium">Artist</span>
					</div>
					<div
						id="playlists"
						className="inline-flex flex-row items-center gap-3 cursor-pointer p-5 w-full text-xl hover:bg-[#101010] rounded"
					>
						<RiPlayListFill className="text-3xl" />
						<span className="font-medium">Playlists</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
