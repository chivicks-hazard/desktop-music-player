import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", () => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(
				app.getAppPath(),
				process.env.NODE_ENV === "development" ? "." : "..",
				"/dist-electron/preload.js"
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
});
