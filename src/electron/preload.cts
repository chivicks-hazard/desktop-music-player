const { contextBridge, ipcRenderer } = require("electron");

console.log("Preload is Running");
contextBridge.exposeInMainWorld("electronAPI", {
	testIPC: (test: string) => ipcRenderer.send("test", test),

	testMainToRen: (callback: any) =>
		ipcRenderer.on("main-to-renderer", (event: any, arg: any) => {
			callback(arg);
		}),

	asyncIPC: () => ipcRenderer.invoke("async"),

	addNumbers: (a: number, b: number) =>
		ipcRenderer.invoke("addNumbers", a, b),
});

// Song API
contextBridge.exposeInMainWorld("musicAPI", {
	getSongList: () => ipcRenderer.invoke("getSongList"),
});
