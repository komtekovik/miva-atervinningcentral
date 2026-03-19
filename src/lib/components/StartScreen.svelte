<script lang="ts">
	import { startGame } from '$lib/game.svelte';
</script>

<g transform="translate(100, 450)">
	<rect width="800" height="450" rx="30" fill="white" stroke="#2c3e50" stroke-width="8" />
	<text x="400" y="160" text-anchor="middle" font-size="70" font-weight="bold" fill="#2c3e50">Återvinningsspelet</text>
	<text x="400" y="250" text-anchor="middle" font-size="40" fill="#34495e">Dra skräpet till rätt plats på kartan</text>
	<g transform="translate(250, 320)" style="cursor: pointer;" onclick={startGame}>
		<rect width="300" height="80" rx="40" fill="#27ae60" />
		<text x="150" y="55" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Starta</text>
	</g>
</g>