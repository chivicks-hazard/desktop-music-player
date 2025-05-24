import PlayingBar from "./PlayingBar";
import PlayWindow from "./PlayWindow";

const Player = () => {
	return (
		<div className="h-dvh relative">
			<PlayWindow />
			<PlayingBar />
		</div>
	);
};

export default Player;
