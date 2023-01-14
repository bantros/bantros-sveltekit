<script lang="ts">
	interface Tweet {
		id: number;
		text: string;
		error?: {
			status: number;
			message: string;
		};
	}

	export let timeline: Tweet;
</script>

<div class="p-8  md:p-16">
	<div class="max-w-3xl">
		<h2 class="mb-2 text-base text-white/60 md:text-xl">Twitter</h2>

		<p class="text-2xl md:text-4xl lg:text-5xl mb-0">
			{#if timeline.error}
				{timeline.error.status}
				<span class="text-white/30">{timeline.error.message}</span>
			{:else}
				<a
					class="text-white"
					href="https://twitter.com/bantros/status/{timeline.id}"
					target="_blank"
					rel="noopener noreferrer"
				>
					{timeline.text}
				</a>
			{/if}
		</p>
	</div>
</div>
