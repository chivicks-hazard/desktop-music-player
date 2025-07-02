import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

function createWindow() {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(
				app.getAppPath(),
				process.env.NODE_ENV === "development" ? "." : "..",
				"/dist-electron/preload.cjs"
			),
		},
	});

	if (process.env.NODE_ENV === "development") {
		mainWindow.loadURL("http://localhost:8001");
	} else {
		mainWindow.loadFile(
			path.join(app.getAppPath() + "/dist-react/index.html")
		);
	}

	setTimeout(() => {
		mainWindow.webContents.send(
			"main-to-renderer",
			"Hello from main process!"
		);
	}, 500);
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

	createWindow();
});
