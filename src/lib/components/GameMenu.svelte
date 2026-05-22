<script lang="ts">
	import { game, selectStation, startGame, goToStart } from '$lib/game.svelte';
</script>

<g transform="translate(440, 1100)">
	<rect width="1600" height="1350" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />
	
	{#if game.status === 'start'}
		<text x="800" y="200" text-anchor="middle" font-size="100" font-weight="bold" fill="#2c3e50">
			Välj återvinningsstation
		</text>

		<g transform="translate(80, 350)" style="cursor: pointer;" onclick={() => selectStation('må')}>
			<rect width="450" height="400" rx="30" fill="#27ae60" />
			<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Må</text>
			<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
				{game.bestTimes.må !== null ? `Bästa: ${game.bestTimes.må}s` : 'Ingen tid än'}
			</text>
		</g>

		<g transform="translate(575, 350)" style="cursor: pointer;" onclick={() => selectStation('bjästa')}>
			<rect width="450" height="400" rx="30" fill="#2980b9" />
			<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Bjästa</text>
			<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
				{game.bestTimes.bjästa !== null ? `Bästa: ${game.bestTimes.bjästa}s` : 'Ingen tid än'}
			</text>
		</g>

		<g transform="translate(1070, 350)" style="cursor: pointer;" onclick={() => selectStation('björna')}>
			<rect width="450" height="400" rx="30" fill="#8e44ad" />
			<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Björna</text>
			<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
				{game.bestTimes.björna !== null ? `Bästa: ${game.bestTimes.björna}s` : 'Ingen tid än'}
			</text>
		</g>

		<g transform="translate(327, 800)" style="cursor: pointer;" onclick={() => selectStation('husum')}>
			<rect width="450" height="400" rx="30" fill="#e67e22" />
			<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Husum</text>
			<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
				{game.bestTimes.husum !== null ? `Bästa: ${game.bestTimes.husum}s` : 'Ingen tid än'}
			</text>
		</g>

		<g transform="translate(822, 800)" style="cursor: pointer;" onclick={() => selectStation('bredbyn')}>
			<rect width="450" height="400" rx="30" fill="#c0392b" />
			<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Bredbyn</text>
			<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
				{game.bestTimes.bredbyn !== null ? `Bästa: ${game.bestTimes.bredbyn}s` : 'Ingen tid än'}
			</text>
		</g>
	{:else if game.status === 'end'}
		<text x="800" y="250" text-anchor="middle" font-size="120" font-weight="bold" fill="#27ae60">Bra jobbat!</text>
		
		<text x="800" y="480" text-anchor="middle" font-size="160">🏆</text>
		
		<text x="800" y="700" text-anchor="middle" font-size="65" fill="#34495e" font-weight="bold">
			Station: <tspan fill="#2c3e50" style="text-transform: capitalize;">{game.currentMapId}</tspan>
		</text>
		
		<text x="800" y="820" text-anchor="middle" font-size="60" fill="#7f8c8d">
			Din tid blev <tspan fill="#2c3e50" font-weight="bold">{game.timeElapsed}</tspan> sekunder.
		</text>

		<g transform="translate(250, 1000)" style="cursor: pointer;" onclick={startGame}>
			<rect width="500" height="130" rx="65" fill="#3498db" />
			<text x="250" y="78" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Spela igen</text>
		</g>

		<g transform="translate(850, 1000)" style="cursor: pointer;" onclick={goToStart}>
			<rect width="500" height="130" rx="65" fill="#95a5a6" />
			<text x="250" y="78" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Välj ny station</text>
		</g>
	{/if}
</g>