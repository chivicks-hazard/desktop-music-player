import { readdir } from "fs/promises";
import { join, parse, extname } from "path";
import { read } from "jsmediatags";
import { TagType } from "jsmediatags/types/index.js";

const rootDir = parse(process.cwd()).root;
const songDir = rootDir + "/Users/HP/Music/Test";

async function getSongs(url: string) {
	try {
		const files = await readdir(url);
		return files.filter((file) => {
			return extname(file) === ".mp3";
		});
	} catch (error) {
		console.log(error);
	}
}

// getSongs(songDir).then((songs) => {
// 	console.log(songs.length);

// 	jsmediatags.read(join(songDir, songs[3]), {
// 		onSuccess: function (tag) {
// 			console.log(tag);
// 		},
// 	});
// });

async function getSongList() {
	let songList: any[] = [];

	const songs = await getSongs(songDir);

	for (const song of songs!) {
		await new Promise((resolve, reject) => {
			read(join(songDir, song), {
				onSuccess: function (tag: TagType) {
					songList.push(tag);
					resolve(tag);
				},

				onError: function (error) {
					console.log("Error: ", error);
					songList.push({
						file: song,
						error: error,
					});
					reject(error);
					// resolve(error);
				},
			});
		});
	}

	return songList;
}

getSongList()
	.then((songList) => {
		console.log(songList[0]);
	})
	.catch((err) => console.log(err))
	.finally(() => console.log("Done"));

export { getSongList };

// Streaming
// getSongs(songDir).then((songs) => {
// 	readFile(join(songDir, songs?.[3]!), "utf-8").then((data) =>
// 		console.log(data)
// 	);
// });
