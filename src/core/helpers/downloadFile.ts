export async function downloadFile(
	url: string,
	fileName: string,
	fileExtension: string = 'jpg'
): Promise<void> {
	const response = await fetch(url);

	const blobImage = await response.blob();

	const href = URL.createObjectURL(blobImage);

	const anchorElement = document.createElement('a');
	anchorElement.href = href;
	anchorElement.download = `${fileName}.${fileExtension}`;

	document.body.appendChild(anchorElement);
	anchorElement.click();

	document.body.removeChild(anchorElement);
	window.URL.revokeObjectURL(href);
}
