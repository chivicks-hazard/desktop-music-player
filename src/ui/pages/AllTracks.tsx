import { useDispatch, useSelector } from "react-redux";
import albumPic from "/album.jpeg";
import { pause, play } from "@/slices/playSlice";
import { FaPause, FaPlay } from "react-icons/fa6";

const AllTracks = () => {
	const isPlaying = useSelector((state: any) => state.play.isPlaying);
	const dispatch = useDispatch();

	return (
		<section
			id="allTracks"
			className="h-[90dvh] p-5 bg-gray-500 overflow-y-auto"
		>
			<h2 className="text-4xl font-bold text-white">All Tracks</h2>
			<div className="flex flex-col items-start gap-5 mt-5">
				{Array.from({ length: 30 }, (_, index) => (
					<div
						className="flex flex-row items-center justify-between border border-white rounded p-1 w-full"
						key={index}
					>
						<div className="flex flex-row items-center gap-2">
							<img
								src={albumPic}
								alt="album"
								className="rounded w-14"
							/>
							<div className="text-white">
								<p className="font-bold">Song Name</p>
								<p className="text-sm">Artist Name</p>
							</div>
						</div>

						<div className="text-white">
							<p className="font-bold">Album Name</p>
							<p className="text-sm">Release Year</p>
						</div>

						<button
							className="cursor-pointer p-1"
							onClick={() => {
								if (!isPlaying) {
									dispatch(play());
								} else {
									dispatch(pause());
								}
								console.log(isPlaying);
							}}
						>
							{!isPlaying ? <FaPlay /> : <FaPause />}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default AllTracks;
