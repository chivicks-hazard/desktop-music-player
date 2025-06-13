import albumPic from "/album.jpeg";

const Home = () => {
	return (
		<section className="h-[90dvh] px-5 pt-5 bg-gray-500">
			<div id="recentlyPlayed" className="">
				<h2 className="text-2xl font-bold text-white">
					Recently Played
				</h2>
				<div className="flex flex-row items-center justify-around w-full gap-10 scroll-smooth overflow-x-auto whitespace-nowrap custom-scrollbar mt-10 pb-5">
					{Array.from({ length: 15 }, (_, index) => (
						<div className="flex flex-col items-start w-25">
							<img
								src={albumPic}
								alt="album"
								className="rounded w-35"
							/>

							<div className="mt-2 text-white">
								<p className="font-bold text-xl">Song Name</p>
								<p className="text-sm">Artist Name</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="grid grid-rows-1 grid-cols-2 gap-5 mt-20">
				<div id="mostPlayedSongs">
					<h2 className="text-2xl font-bold text-white">
						Most Played Songs
					</h2>
					<div className="flex flex-col items-start h-56 gap-5 mt-5 overflow-y-auto custom-scrollbar">
						{Array.from({ length: 10 }, (_, index) => (
							<div className="flex flex-row items-center h-12 gap-2">
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
						))}
					</div>
				</div>
				<div id="mostPlayedArtists">
					<h2 className="text-2xl font-bold text-white">
						Most Played Songs
					</h2>
					<div className="flex flex-col items-start h-56 gap-5 mt-5 overflow-y-auto custom-scrollbar">
						{Array.from({ length: 10 }, (_, index) => (
							<div className="flex flex-row items-center h-12 gap-2">
								<img
									src={albumPic}
									alt="album"
									className="rounded w-14"
								/>

								<div className="text-white font-bold">
									Artist Name
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
