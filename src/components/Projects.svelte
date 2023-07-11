<script>
	const projects = [
		{
			id: 'redburn',
			title: 'Redburn',
			url: 'https://research.redburn.com/',
			color: 'text-white'
		},
		{
			id: 'jodrell-bank',
			title: 'Jodrell Bank',
			url: 'https://www.jodrellbank.net/',
			color: 'text-white'
		},
		{
			id: 'the-reader',
			title: 'The Reader',
			url: 'https://trails.thereader.org.uk/',
			color: 'text-white/90'
		},
		{
			id: 'faded',
			title: 'Faded',
			url: 'https://fadedstore.com/',
			color: 'text-white/90'
		},
		{
			id: 'horlicks',
			title: 'Horlicks',
			url: 'https://www.horlicks.co.uk/',
			color: 'text-white/80'
		},
		{
			id: 'astonish',
			title: 'Astonish',
			url: 'https://astonish.co.uk/',
			color: 'text-white/80'
		},
		{
			id: 'zoflora',
			title: 'Zoflora',
			url: 'https://www.zoflora.co.uk/',
			color: 'text-white/70'
		},
		{
			id: 'dr-sarah-davies',
			title: 'Dr Sarah Davies',
			url: 'https://www.drsarahdavies.co.uk/',
			color: 'text-white/70'
		},
		{
			id: 'raw',
			title: 'Raw Design Studio',
			url: 'https://weareraw.co.uk/',
			color: 'text-white/60'
		}
	];
</script>

<div class="max-w-5xl p-8 md:p-16">
	<p class="mb-2 text-base text-white/60 md:text-xl">Selected Work</p>

	{#each projects as { title, url, color }, index}
		<div class="project-item mb-2 md:mb-3">
			<a
				class="text-4xl font-medium md:text-5xl lg:text-8xl {color}"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</a>
		</div>
	{/each}
</div>
