<script lang="ts">
	import Projects from '../components/Projects.svelte';
	import Timeline from '../components/Timeline.svelte';
	import Player from '../components/Player.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Projects />
<Timeline timeline={data.timeline.data} />
<Player playing={data.playing} />

<style></style>
