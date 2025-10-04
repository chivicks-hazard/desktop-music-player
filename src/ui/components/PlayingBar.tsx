import store from "@/store";
import { useContext, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../../slices/playSlice";
import { AudioRefContext } from "../Player";
import { Slider } from "./slider";

const PlayingBar = () => {
	const isPlaying = useSelector((state: any) => state.play.isPlaying);
	// const { isPlaying, song } = store.getState().play;
	const dispatch = useDispatch();
	const audioRef = useContext(AudioRefContext);

	const songDir = "C:/Users/HP/Music/Test";

	const audioControl = () => {
		if (isPlaying) {
			dispatch(pause());
		} else {
			dispatch(play());
		}

		if (audioRef?.current) {
			if (store.getState().play.isPlaying) {
				audioRef.current.src = `${songDir}/${
					store.getState().play.song
				}`;
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}

		console.log("UI: ", isPlaying);
		console.log("Logic: ", store.getState().play.isPlaying);
		console.log("Logic (song): ", store.getState().play.song);
	};

	useEffect(() => {
		// if (audioRef.current) {
		// 	if (isPlaying) {
		// 		audioRef.current.src = `${songDir}/${song}`;
		// 		audioRef.current.play();
		// 	} else {
		// 		audioRef.current.pause();
		// 	}
		// }

		console.log(isPlaying);
	}, []);

	return (
		<section
			id="player"
			className="bg-[#2f2f2f] h-[10%] absolute bottom-0 left-0 right-0 z-5"
		>
			<audio src="" ref={audioRef}></audio>
			<Slider
				min={0}
				step={1}
				max={100}
				defaultValue={[40]}
				className="[&_[role=slider]]:bg-zinc-500
				[&_.track]:bg-slate-500
				[&_.range]:bg-slate-200
				"
			/>
			<div className="flex flex-row justify-around w-3/4 items-center mx-auto mt-5 text-slate-100">
				<button className="cursor-pointer p-1">
					<IoMdSkipBackward />
				</button>
				<button
					className="cursor-pointer p-1"
					onClick={() => {
						audioControl();
					}}
				>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
				<button className="cursor-pointer p-1">
					<IoMdSkipForward />
				</button>
			</div>
		</section>
	);
};

export default PlayingBar;
