<script>
	import '../app.css';
</script>

<div class="app">
	<header class="p-8 md:p-16">
		<h1 class="text-base md:text-xl font-bold text-white mb-2">Jonathon Halliwell</h1>
		<p class="max-w-3xl text-xl md:text-2xl text-white/60 mb-0">
			Creative front end developer from Manchester, currently employed at
			<a
				class="text-white/30"
				href="https://www.mosquitodigital.co.uk/"
				target="_blank"
				rel="noopener noreferrer">Mosquito Digital</a
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
		<slot />
	</main>
</div>

<style></style>
