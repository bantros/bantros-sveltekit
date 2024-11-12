<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="app">
	<header class="p-8 md:p-16">
		<h1 class="mb-2 text-base font-bold text-white md:text-xl">
			Jonathon Halliwell
		</h1>
		<p class="mb-0 max-w-3xl text-xl text-white/60 md:text-2xl">
			Creative front end developer from Manchester, currently employed at
			<a
				class="text-white/30"
				href="https://www.ctidigital.com/"
				target="_blank"
				rel="noopener noreferrer">CTI Digital</a
			>. Previously over at
			<a
				class="text-white/30"
				href="https://weareraw.co.uk/"
				target="_blank"
				rel="noopener noreferrer">Raw Design Studio</a
			>.
		</p>
	</header>
	<main>
		{@render children()}
	</main>
</div>
