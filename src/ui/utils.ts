export function parseImageData(tag: string | any) {
	const { data, format } = tag.tags.picture;

	let base64String = "";
	for (let i = 0; i < data.length; i++) {
		base64String += String.fromCharCode(data[i]);
	}

	return `data:${format};base64,${window.btoa(base64String)}`;
}
