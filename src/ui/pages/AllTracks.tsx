import { useDispatch, useSelector } from "react-redux";
import albumPic from "/album.jpeg";
import { pause, play } from "@/slices/playSlice";
import { FaPause, FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { TagType } from "jsmediatags/types";
import { parseImageData } from "../utils";

const AllTracks = () => {
	const isPlaying = useSelector((state: any) => state.play.isPlaying);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState<boolean>(false);
	const [tag, setTag] = useState<TagType>();
	const [songList, setSongList] = useState<TagType[]>([]);

	// const [image, setImage] = useState<string>();

	useEffect(() => {
		setLoading(true);

		if (window.musicAPI) {
			window.musicAPI
				.getSongList()
				.then((list: any) => {
					console.log(list[0]);

					// setTag(list[0]);
					setSongList(list);
					// console.log(parseImageData(songList[0]));
					// setImage(parseImageData(songList[0]));
				})
				.finally(() => setLoading(false));
		}
	}, []);

	return (
		<section
			id="allTracks"
			className="h-[90dvh] p-5 bg-gray-500 overflow-y-auto"
		>
			<h2 className="text-4xl font-bold text-white">All Tracks</h2>
			<div className="flex flex-col items-start gap-5 mt-5">
				{loading ? (
					<p className="text-2xl font-bold text-white">Loading...</p>
				) : (
					songList.map((song, index) => (
						<div
							className="flex flex-row items-center justify-between border border-white rounded p-1 w-full"
							key={index}
						>
							<div className="flex flex-row items-center gap-2">
								<img
									src={song && parseImageData(song)}
									alt="album"
									className="rounded w-14"
								/>
								<div className="text-white">
									<p className="font-bold">
										{song?.tags.title}
									</p>
									<p className="text-sm">
										{song?.tags.artist}
									</p>
								</div>
							</div>

							<div className="text-white">
								<p className="font-bold">{song?.tags.album}</p>
								<p className="text-sm">{song?.tags.year}</p>
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
								{/* <FaPlay /> */}
							</button>
						</div>
					))
				)}
			</div>
		</section>
	);
};

export default AllTracks;
