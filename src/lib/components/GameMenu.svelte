<script lang="ts">
	import { game, selectStation, startGame, goToStart } from '$lib/game.svelte';
	import ChooseStationButton from './ChooseStationButton.svelte';
</script>

<g transform="translate(440, 1100)">
	<rect width="1600" height="1350" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />

	{#if game.status === 'start'}
		<text x="800" y="150" text-anchor="middle" font-size="100" font-weight="bold" fill="#2c3e50">
			Återvinningsstation
		</text>

		<!-- Spelregler -->
		<g transform="translate(0, 240)">
			<!-- Kort 1: Sortera -->
			<rect x="100" y="0" width="400" height="220" rx="20" fill="#f8f9fa" stroke="#bdc3c7" stroke-width="4" />
			<text x="300" y="65" text-anchor="middle" font-size="50">♻️</text>
			<text x="300" y="115" text-anchor="middle" font-size="35" font-weight="bold" fill="#2c3e50">Sortera</text>
			<text x="300" y="160" text-anchor="middle" font-size="26" fill="#34495e">Dra och släpp 15 föremål</text>
			<text x="300" y="195" text-anchor="middle" font-size="26" fill="#34495e">i rätt container.</text>

			<!-- Kort 2: Tidtagning -->
			<rect x="600" y="0" width="400" height="220" rx="20" fill="#f8f9fa" stroke="#bdc3c7" stroke-width="4" />
			<text x="800" y="65" text-anchor="middle" font-size="50">⏱️</text>
			<text x="800" y="115" text-anchor="middle" font-size="35" font-weight="bold" fill="#2c3e50">Tidtagning</text>
			<text x="800" y="160" text-anchor="middle" font-size="26" fill="#34495e">Varje sekund räknas.</text>
			<text x="800" y="195" text-anchor="middle" font-size="26" fill="#34495e">Din bästa tid sparas.</text>

			<!-- Kort 3: Tips -->
			<rect x="1100" y="0" width="400" height="220" rx="20" fill="#f8f9fa" stroke="#bdc3c7" stroke-width="4" />
			<text x="1300" y="65" text-anchor="middle" font-size="50">💡</text>
			<text x="1300" y="115" text-anchor="middle" font-size="35" font-weight="bold" fill="#2c3e50">Få tips</text>
			<text x="1300" y="160" text-anchor="middle" font-size="26" fill="#34495e">Dra skräpet till Mivo</text>
			<text x="1300" y="195" text-anchor="middle" font-size="26" fill="#34495e">för att se rätt kategori.</text>
		</g>

		<!-- Stationsval -->
		<g transform="translate(0, 540) scale(0.85)">
			<ChooseStationButton x={133} y={0} fill="#27ae60" label="Må" bestTime={game.bestTimes.må} onclick={() => selectStation('må')} />
			<ChooseStationButton x={716} y={0} fill="#2980b9" label="Bjästa" bestTime={game.bestTimes.bjästa} onclick={() => selectStation('bjästa')} />
			<ChooseStationButton x={1299} y={0} fill="#8e44ad" label="Björna" bestTime={game.bestTimes.björna} onclick={() => selectStation('björna')} />

			<ChooseStationButton x={327} y={450} fill="#e67e22" label="Husum" bestTime={game.bestTimes.husum} onclick={() => selectStation('husum')} />
			<ChooseStationButton x={1104} y={450} fill="#c0392b" label="Bredbyn" bestTime={game.bestTimes.bredbyn} onclick={() => selectStation('bredbyn')} />
		</g>

	{:else if game.status === 'end'}
		<text x="800" y="250" text-anchor="middle" font-size="120" font-weight="bold" fill="#27ae60">Bra jobbat!</text>
		<text x="800" y="480" text-anchor="middle" font-size="160">🎉</text>

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
