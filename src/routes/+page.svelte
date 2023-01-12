<script lang="ts">
	import Projects from './Projects.svelte';
	import LatestTweet from './LatestTweet.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Projects />
<LatestTweet tweets={data.userTweets.data} />

<style></style>
