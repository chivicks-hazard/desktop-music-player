import { createReadStream } from "fs";
import { readdir, readFile } from "fs/promises";
import { read } from "jsmediatags";
import { TagType } from "jsmediatags/types/index.js";
import { extname, join, parse } from "path";

interface Tag extends TagType {
	fileName: string;
}

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
		// let index: number = 0;

		await new Promise((resolve, reject) => {
			read(join(songDir, song), {
				onSuccess: function (tag: TagType) {
					let tempTap: Tag = tag as unknown as Tag;

					// index++;
					// tempTap.id = index;
					tempTap.fileName = song;

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

async function getSongStream(fileName: string) {
	let stream: any = "";

	readFile(join(songDir, fileName), "utf-8").then((data: any) => {
		stream = data;
	});

	return stream;
}

// getSongList()
// 	.then((songList) => {
// 		console.log(songList[0]);
// 	})
// 	.catch((err) => console.log(err))
// 	.finally(() => console.log("Done"));

// let songs = await getSongs(songDir);
// console.log(songs);

// Streaming
getSongs(songDir).then((songs) => {
	// readFile(join(songDir, songs?.[3]!), "utf-8").then((data) =>
	// 	console.log(data)
	// );
});

// ReadStream

// Exports
export { getSongList, getSongStream };
