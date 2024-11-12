<script lang="ts">
	interface PlayerProps {
		playing: boolean;
		album?: string;
		artist?: string;
		track?: string;
		error?: {
			status: number;
			message: string;
		};
	}

	export let player: PlayerProps;
</script>

<div class="p-8 md:p-16">
	<div class="max-w-2xl">
		<h2 class="mb-2 text-base text-white/60 md:text-xl">
			{player.playing ? 'Now Playing' : 'Recently Played'}
		</h2>
		<p class="mb-2 text-2xl md:text-4xl lg:text-5xl">
			{#if player.error}
				{player.error.status}
				<span class="text-white/30">{player.error.message}</span>
			{:else}
				{player.track}
				<span class="text-white/30">{player.artist}</span>
			{/if}
		</p>
	</div>
</div>
