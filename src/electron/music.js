import fs from "fs/promises";
import path from "path";
import jsmediatags from "jsmediatags";

const rootDir = path.parse(process.cwd()).root;
const songDir = rootDir + "/Users/HP/Music/Test";

async function getSongs(url) {
	try {
		const files = await fs.readdir(url);
		return files.filter((file) => {
			return path.extname(file) === ".mp3";
		});
	} catch (error) {
		console.log(error);
	}
}

getSongs(songDir).then((songs) => {
	console.log(songs);

	jsmediatags.read(path.join(songDir, songs[3]), {
		onSuccess: function (tag) {
			console.log(tag);
		},
	});
});

// Streaming
// getSongs(songDir).then((songs) => {
// 	fs.readFile(path.join(songDir, songs[3]), "utf-8").then((data) =>
// 		console.log(data)
// 	);
// });
