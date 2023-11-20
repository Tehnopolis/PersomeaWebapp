import { API_URL } from '../globals';

export interface GenerationOptions {
	input: File;
	avatar: File;
}

export interface GenerationResult {
	// URL to image
	result_url: string;
}

export async function generateAvatar({
	input,
	avatar
}: GenerationOptions): Promise<GenerationResult> {
	const body = new FormData();
	body.append('src', input);
	body.append('dst', avatar);

	const resp = await fetch(API_URL + '/avatars/simple_swap', {
		method: 'POST',
		body
	});
	const data = await resp.json();

	return data as GenerationResult;
}
