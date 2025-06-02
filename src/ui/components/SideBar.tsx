import { GiMusicSpell } from "react-icons/gi";
import { IoMdAlbums } from "react-icons/io";
import { IoHome, IoPerson } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";

const Sidebar = () => {
	return (
		<nav>
			<div className="fixed left-0 top-0 h-full bg-green-400 w-2/12 p-5">
				<h1 className="text-3xl font-medium">Sidebar</h1>

				<div className="flex flex-col items-start justify-between gap-5 mt-5">
					<div
						id="home"
						className="inline-flex flex-row items-center gap-1 cursor-pointer text-xl"
					>
						<IoHome />
						<span className="font-medium">Home</span>
					</div>
					<div
						id="albums"
						className="inline-flex flex-row items-center gap-1 cursor-pointer text-xl"
					>
						<IoMdAlbums />
						<span className="font-medium">Albums</span>
					</div>
					<div
						id="genre"
						className="inline-flex flex-row items-center gap-1 cursor-pointer text-xl"
					>
						<GiMusicSpell />
						<span className="font-medium">Genre</span>
					</div>
					<div
						id="artist"
						className="inline-flex flex-row items-center gap-1 cursor-pointer text-xl"
					>
						<IoPerson />
						<span className="font-medium">Artist</span>
					</div>
					<div
						id="playlists"
						className="inline-flex flex-row items-center gap-1 cursor-pointer text-xl"
					>
						<RiPlayListFill />
						<span className="font-medium">Playlists</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
