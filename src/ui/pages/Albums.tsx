import { FaPlay } from "react-icons/fa6";
import albumPic from "/album.jpeg";

const Albums = () => {
	return (
		<section className="h-[90dvh] px-5 pt-5 bg-[#3d3d3d] overflow-y-auto pb-10">
			<h2 className="text-4xl font-bold text-[#f0f8ff]">Albums</h2>

			<div className="flex flex-col justfy-between items-start gap-10 mt-15">
				{Array.from({ length: 10 }, (_, index) => (
					<div
						key={index}
						className="flex flex-row justify-between items-start gap-5 bg-[#282828] hover:bg-[#1f1f1f] rounded p-2"
					>
						<img src={albumPic} alt="Album Pic" />
						<div className="flex flex-col justify-between items-end gap-20">
							<div className="text-[#f0f8ff]">
								<p className="font-bold">Album Name</p>
								<p className="text-sm">Album Artist</p>
							</div>
							<button className="cursor-pointer p-1 text-[#f0f8ff]">
								<FaPlay />
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Albums;
