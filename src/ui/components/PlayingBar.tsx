import React from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../../slices/playSlice";
import { Slider } from "./slider";

const PlayingBar = () => {
	const isPlaying = useSelector((state: any) => state.play.isPlaying);
	const dispatch = useDispatch();

	return (
		<section
			id="player"
			className="bg-blue-900 p-8 absolute bottom-0 left-0 right-0 z-5"
		>
			<Slider min={0} step={1} max={100} className="bg-green-500" />
			<div className="flex flex-row justify-around w-3/4 items-center mx-auto">
				<button className="cursor-pointer p-1">
					<IoMdSkipBackward />
				</button>
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
				<button className="cursor-pointer p-1">
					<IoMdSkipForward />
				</button>
			</div>
		</section>
	);
};

export default PlayingBar;
