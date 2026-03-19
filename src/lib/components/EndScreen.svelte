<script lang="ts">
	import { game, startGame } from '$lib/game.svelte';
</script>

<g transform="translate(100, 100)">
	<rect width="800" height="400" rx="30" fill="white" stroke="#2c3e50" stroke-width="8" />
	<text x="400" y="150" text-anchor="middle" font-size="80" font-weight="bold" fill="#2c3e50">Bra jobbat!</text>
	<text x="400" y="230" text-anchor="middle" font-size="50" fill="#34495e">Din tid blev {game.timeElapsed} sekunder.</text>
	<g transform="translate(250, 280)" style="cursor: pointer;" onclick={startGame}>
		<rect width="300" height="80" rx="40" fill="#3498db" />
		<text x="150" y="55" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Spela igen</text>
	</g>
</g>