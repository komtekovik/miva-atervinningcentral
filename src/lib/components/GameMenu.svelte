<script lang="ts">
	import { game, selectStation, startGame, goToStart } from '$lib/game.svelte';
	import ChooseStationButton from './ChooseStationButton.svelte';
</script>

<g transform="translate(440, 1100)">
	<rect width="1600" height="1350" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />
	
	{#if game.status === 'start'}
		<text x="800" y="200" text-anchor="middle" font-size="100" font-weight="bold" fill="#2c3e50">
			Välj återvinningsstation
		</text>

		<ChooseStationButton x={80} y={350} fill="#27ae60" label="Må" bestTime={game.bestTimes.må} onclick={() => selectStation('må')} />
		<ChooseStationButton x={575} y={350} fill="#2980b9" label="Bjästa" bestTime={game.bestTimes.bjästa} onclick={() => selectStation('bjästa')} />
		<ChooseStationButton x={1070} y={350} fill="#8e44ad" label="Björna" bestTime={game.bestTimes.björna} onclick={() => selectStation('björna')} />
		<ChooseStationButton x={327} y={800} fill="#e67e22" label="Husum" bestTime={game.bestTimes.husum} onclick={() => selectStation('husum')} />
		<ChooseStationButton x={822} y={800} fill="#c0392b" label="Bredbyn" bestTime={game.bestTimes.bredbyn} onclick={() => selectStation('bredbyn')} />
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