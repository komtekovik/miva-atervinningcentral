<script lang="ts">
	import { game } from '$lib/game.svelte';
</script>

<g transform="translate(100, 450)">
	<rect width="800" height="600" rx="20" fill="white" stroke="#2c3e50" stroke-width="6" />
	<text x="400" y="100" text-anchor="middle" font-size="55" font-weight="bold" fill={game.isWrongDrop ? '#e74c3c' : '#2c3e50'}>{game.message}</text>
	<text x="400" y="170" text-anchor="middle" font-size="40" fill="#7f8c8d">Skräp {game.currentIndex + 1} av {game.trashItems.length}</text>
	<text x="400" y="250" text-anchor="middle" font-size="45" font-weight="bold" fill="#34495e">Tid: {game.timeElapsed} s</text>
</g>

<g transform="translate(2250, 2925)">
	<circle cx="0" cy="0" r="120" fill="#f39c12" stroke="white" stroke-width="12" />
	<text x="0" y="40" text-anchor="middle" font-size="120" font-weight="bold" fill="white">?</text>
</g>