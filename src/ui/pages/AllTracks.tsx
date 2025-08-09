import { pause, play, setSong } from "@/slices/playSlice";
import { TagType } from "jsmediatags/types";
import { useContext, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { parseImageData } from "../utils";
import store from "@/store";
import { AudioRefContext } from "../Player";

interface Tag extends TagType {
	fileName: string;
}

const AllTracks = () => {
	const isPlaying = useSelector((state: any) => state.play.isPlaying);
	const loadedSong = useSelector((state: any) => state.play.song);
	const dispatch = useDispatch();
	const audioRef = useContext(AudioRefContext);

	const [loading, setLoading] = useState<boolean>(false);
	// const [tag, setTag] = useState<TagType>();
	const [songList, setSongList] = useState<Tag[]>([]);

	// const [image, setImage] = useState<string>();

	// const handleClick = () => {

	// }

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

		// console.log("Normal redux", isPlaying);
		// console.log(loadedSong);
		// console.log("From redux store", store.getState().play.isPlaying);
	}, []);

	return (
		<section
			id="allTracks"
			className="h-[90dvh] p-5 bg-gray-500 overflow-y-auto"
		>
			<h2
				className="text-4xl font-bold text-white"
				onClick={() => {
					console.log(isPlaying);
					// console.log(loadedSong);
				}}
			>
				All Tracks
			</h2>
			<div className="flex flex-col items-start gap-5 mt-5">
				{loading ? (
					<p className="text-2xl font-bold text-white">Loading...</p>
				) : (
					songList.map((song, index) => (
						<div
							className="flex flex-row items-center justify-between border border-white rounded p-1 w-full"
							key={index}
							onClick={() => {
								dispatch(setSong(song.fileName));
								dispatch(play());
								console.log(
									"Logic (song): ",
									store.getState().play.song
								);
								if (audioRef?.current) {
									audioRef.current.src = `C:/Users/HP/Music/Test/${song.fileName}`;
									audioRef.current.play();
								}
							}}
						>
							<div className="flex flex-row items-center gap-2">
								{/* Song Image */}
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

							<div className="flex flex-row items-center gap-5 justify-end">
								<div className="text-white flex flex-col items-end">
									<p className="font-bold">
										{song?.tags.album}
									</p>
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
										// console.log(isPlaying);
									}}
								>
									{isPlaying &&
									loadedSong === song.fileName ? (
										<FaPause />
									) : (
										<FaPlay />
									)}
									{/* <FaPlay /> */}
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
};

export default AllTracks;
