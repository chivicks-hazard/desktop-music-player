import { app } from "electron";
import path from "path";
export function isDev() {
    return process.env.NODE_ENV === "development";
}
export function getPreloadPath() {
    return path.join(app.getAppPath(), isDev() ? "." : "..", "/dist-electron/preload.js");
}
export function getUIPath() {
    return path.join(app.getAppPath() + "/dist-react/index.html");
}
