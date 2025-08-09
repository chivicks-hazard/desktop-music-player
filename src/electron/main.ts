import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { getSongList, getSongStream } from "./music.js";

function createWindow() {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(
				app.getAppPath(),
				process.env.NODE_ENV === "development" ? "." : "..",
				"/dist-electron/preload.cjs"
			),
			webSecurity: false,
		},
	});

	if (process.env.NODE_ENV === "development") {
		mainWindow.loadURL("http://localhost:8001");
	} else {
		mainWindow.loadFile(
			path.join(app.getAppPath() + "/dist-react/index.html")
		);
	}

	mainWindow.webContents.on("did-finish-load", () => {
		console.log("Page finishing loading. Sending message.....");

		mainWindow.webContents.send(
			"main-to-renderer",
			"Hello from main process!"
		);
	});
}

app.whenReady().then(() => {
	ipcMain.on("test", (event, arg) => {
		console.log("From frontend: ", arg);
	});

	ipcMain.handle("async", () => {
		console.log("Renderer asked for app version");

		return app.getVersion();
	});

	ipcMain.handle("addNumbers", (event, a: number, b: number) => {
		return a + b;
	});

	// get song list
	ipcMain.handle("getSongList", async () => {
		let list = await getSongList();

		return list;
	});

	// ipcMain.handle("getSongStream", async (event, fileName: string) => {
	// 	let stream = await getSongStream(fileName);

	// 	return stream;
	// });

	createWindow();
});
