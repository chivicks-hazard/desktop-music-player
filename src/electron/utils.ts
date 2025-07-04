import { app } from "electron";
import path from "path";

export function isDev(): boolean {
	return process.env.NODE_ENV === "development";
}

export function getPreloadPath() {
	return path.join(
		app.getAppPath(),
		isDev() ? "." : "..",
		"/dist-electron/preload.js"
	);
}
export function getUIPath() {
	return path.join(app.getAppPath() + "/dist-react/index.html");
}

export function parseImageData(tag: string | any) {
	const { data, format } = tag.tags.picture;

	let base64String = "";
	for (let i = 0; i < data.length; i++) {
		base64String += String.fromCharCode(data[i]);
	}

	return `data:${format};base64,${window.btoa(base64String)}`;
}
