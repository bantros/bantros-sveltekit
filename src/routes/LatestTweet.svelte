<script>
	export let tweets;
</script>

<div class="p-8  md:p-16">
	<div class="max-w-3xl">
		<h2 class="mb-2  text-base  text-white/60  md:text-xl">Twitter</h2>

		<p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0">
			<a
				class="text-white"
				href="https://twitter.com/bantros/status/{tweets[0].id}"
				target="_blank"
				rel="noopener noreferrer"
			>
				{tweets[0].text}
			</a>
		</p>
	</div>
</div>
