<script lang="ts">
	import { game, selectStation, startGame, goToStart } from '$lib/game.svelte';
	import ChooseStationButton from './ChooseStationButton.svelte';
</script>

<g transform="translate(440, 1100)" font-family="system-ui, sans-serif">
	<rect width="1600" height="1350" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />

	{#if game.status === 'start'}
		<text x="800" y="130" text-anchor="middle" font-size="85" font-weight="bold" fill="#2c3e50">
			Återvinningsstation
		</text>

		<!-- Vänster kolumn: Information och regler -->
		<g transform="translate(120, 200)">
			<rect width="640" height="1000" rx="30" fill="#f8f9fa" stroke="#bdc3c7" stroke-width="4" />
			<text x="320" y="90" text-anchor="middle" font-size="45" font-weight="bold" fill="#2c3e50">Så spelar du</text>

			<line x1="120" y1="140" x2="520" y2="140" stroke="#bdc3c7" stroke-width="2" />

			<!-- Regel 1 -->
			<text x="320" y="260" text-anchor="middle" font-size="70">♻️</text>
			<text x="320" y="325" text-anchor="middle" font-size="32" font-weight="bold" fill="#2c3e50">Sortera</text>
			<text x="320" y="375" text-anchor="middle" font-size="26" fill="#34495e">Dra 15 skräpföremål till</text>
			<text x="320" y="415" text-anchor="middle" font-size="26" fill="#34495e">rätt container.</text>

			<!-- Regel 2 -->
			<text x="320" y="535" text-anchor="middle" font-size="70">⏱️</text>
			<text x="320" y="600" text-anchor="middle" font-size="32" font-weight="bold" fill="#2c3e50">Tidtagning</text>
			<text x="320" y="650" text-anchor="middle" font-size="26" fill="#34495e">Varje sekund räknas.</text>
			<text x="320" y="690" text-anchor="middle" font-size="26" fill="#34495e">Din bästa tid sparas per ort.</text>

			<!-- Regel 3 -->
			<text x="320" y="810" text-anchor="middle" font-size="70">💡</text>
			<text x="320" y="875" text-anchor="middle" font-size="32" font-weight="bold" fill="#2c3e50">Få tips</text>
			<text x="320" y="925" text-anchor="middle" font-size="26" fill="#34495e">Dra skräpet till Mivo om</text>
			<text x="320" y="965" text-anchor="middle" font-size="26" fill="#34495e">du är osäker på kategorin.</text>
		</g>

		<!-- Höger kolumn: Stationslista -->
		<g transform="translate(840, 200)">
			<text x="320" y="90" text-anchor="middle" font-size="40" font-weight="bold" fill="#7f8c8d">
				Välj station för att starta
			</text>

			<g transform="translate(0, 150)">
				<ChooseStationButton x={0} y={0} fill="#8e44ad" label="Björna" bestTime={game.bestTimes.björna} onclick={() => selectStation('björna')} />
				<ChooseStationButton x={0} y={170} fill="#c0392b" label="Bredbyn" bestTime={game.bestTimes.bredbyn} onclick={() => selectStation('bredbyn')} />
				<ChooseStationButton x={0} y={340} fill="#2980b9" label="Bjästa" bestTime={game.bestTimes.bjästa} onclick={() => selectStation('bjästa')} />
				<ChooseStationButton x={0} y={510} fill="#e67e22" label="Husum" bestTime={game.bestTimes.husum} onclick={() => selectStation('husum')} />
				<ChooseStationButton x={0} y={680} fill="#27ae60" label="Må" bestTime={game.bestTimes.må} isHard={true} onclick={() => selectStation('må')} />
			</g>
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
