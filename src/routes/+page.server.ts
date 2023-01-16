import { error } from '@sveltejs/kit';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN,
	TWITTER_BEARER_TOKEN
} from '$env/static/private';
import type { PageLoad } from './$types';

import qs from 'qs';

export const load = (async ({ fetch }) => {
	const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

	const getAccessToken = async () => {
		const res = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${basic}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: qs.stringify({
				grant_type: 'refresh_token',
				refresh_token: SPOTIFY_REFRESH_TOKEN
			})
		});
		return res.json();
	};

	const getCurrentlyPlayingTrack = async () => {
		const { access_token } = await getAccessToken();
		const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});
		if (res.status === 204) {
			const recentlyPlayedTracks = await getRecentlyPlayedTracks(access_token);
			return recentlyPlayedTracks;
		}
		const json = await res.json();
		if (res.status > 400) {
			return {
				error: json.error,
				playing: false
			};
		}
		return {
			album: json.item.album.name,
			artist: json.item.artists.map((artist: { name: string }) => artist.name).join(', '),
			track: json.item.name,
			playing: json.is_playing
		};
	};

	const getRecentlyPlayedTracks = async (access_token: string) => {
		const res = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});
		const json = await res.json();
		if (res.status > 400) {
			return {
				error: json.error,
				playing: false
			};
		}
		return {
			album: json.items[0].track.album.name,
			artist: json.items[0].track.artists.map((artist: { name: string }) => artist.name).join(', '),
			track: json.items[0].track.name,
			playing: false
		};
	};

	const getTimeline = async () => {
		const res = await fetch(
			`https://api.twitter.com/2/users/18880560/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5`,
			{
				method: 'GET',
				headers: {
					authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
					'Content-Type': 'application/json'
				}
			}
		);
		const json = await res.json();
		if (res.status === 304 || res.status > 400) {
			return {
				error: {
					status: json.status,
					message: json.title
				}
			};
		}
		return {
			id: json.data[0].id,
			text: json.data[0].text
		};
	};

	return {
		player: await getCurrentlyPlayingTrack(),
		timeline: await getTimeline()
	};
}) satisfies PageLoad;
