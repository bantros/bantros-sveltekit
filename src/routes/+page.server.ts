import { TWITTER_BEARER_TOKEN } from '$env/static/private';
import type { PageLoad } from './$types';

const userId = '18880560';
const url = `https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5`;

export const load = (async ({ fetch }) => {
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
			'Content-Type': 'application/json'
		}
	});
	const userTweets = await res.json();
	return {
		userTweets
	};
}) satisfies PageLoad;
