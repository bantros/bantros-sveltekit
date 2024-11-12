<script lang="ts">
	import Projects from '../components/Projects.svelte';
	import Player from '../components/Player.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Projects />
<Player player={data.player} />
