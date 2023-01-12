import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_CLIENT_ID } from '$env/static/private';

export const GET = (() => {
	throw redirect(
		302,
		`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173/&scope=user-read-private%20user-read-email`
	);
}) satisfies RequestHandler;
