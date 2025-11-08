import albumPic from "/album.jpeg";

const Genre = () => {
	return (
		<section className="h-[90dvh] px-5 pt-5 bg-[#3d3d3d] overflow-y-auto pb-10">
			<h2 className="text-4xl font-bold text-[#f0f8ff]">Genre</h2>

			<div className="grid grid-cols-5 gap-3 mt-15">
				{Array.from({ length: 17 }, (_, index) => (
					<div
						key={index}
						className="flex flex-col justify-between items-center gap-5 bg-[#282828] hover:bg-[#1f1f1f] rounded p-10"
					>
						<img src={albumPic} alt="Album Pic" />
						<span className="font-bold text-[#f0f8ff] text-xl">
							Genre
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Genre;
