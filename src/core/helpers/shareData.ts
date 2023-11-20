export type ShareStrategy = 'share_api' | 'clipboard_api' | 'none';
export async function shareData(
	title: string,
	data: string
): Promise<ShareStrategy> {
	const shareData: ShareData = {
		title,
		text: data
	};

	// Web Share API (only HTTPS, locally supported)
	if (navigator.share && navigator.canShare(shareData)) {
		await navigator.share(shareData);
		return 'share_api';
	}
	// Clipboard API
	else if (navigator.clipboard) {
		await navigator.clipboard.writeText(data);
		return 'clipboard_api';
	}

	return 'none';
}
