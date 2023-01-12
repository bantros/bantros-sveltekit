<script lang="ts">
	export let playing: any;
</script>

<div class="p-8  md:p-16">
	<div class="max-w-2xl">
		<h2 class="mb-2 text-base text-white/60 md:text-xl">
			{playing.is_playing ? 'Now Playing' : 'Recently Played'}
		</h2>
		{#if playing?.progress_ms}
			<p class="text-2xl md:text-4xl lg:text-5xl mb-2">
				{playing.item.name}
				{#if playing.item.artists[0].name !== null}
					<span class="text-white/30">{playing.item.artists[0].name}</span>
				{/if}
			</p>
		{:else}
			<p class="text-2xl md:text-4xl lg:text-5xl mb-2">
				{playing.items[0].track.name}
				{#if playing.items[0].track.album.artists[0].name !== null}
					<span class="text-white/30">{playing.items[0].track.album.artists[0].name}</span>
				{/if}
			</p>
		{/if}
	</div>
</div>
