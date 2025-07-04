export {};

declare global {
	interface Window {
		electronAPI: {
			testIPC: (test: string) => void;
			testMainToRen: (callback: (msg: string) => void) => void;
			asyncIPC: () => Promise<string>;
			addNumbers: (a: number, b: number) => Promise<number>;
		};

		musicAPI: {
			getSongList: () => Promise<any[]>;
		};
	}
}
