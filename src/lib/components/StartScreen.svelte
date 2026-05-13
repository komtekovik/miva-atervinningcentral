<script lang="ts">
	import { selectStation } from '$lib/game.svelte';
</script>

<g transform="translate(440, 1100)">
	<rect width="1600" height="900" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />
	
	<text x="800" y="200" text-anchor="middle" font-size="100" font-weight="bold" fill="#2c3e50">
		Välj återvinningsstation
	</text>

	<g transform="translate(150, 350)" style="cursor: pointer;" onclick={() => selectStation('må')}>
		<rect width="600" height="400" rx="30" fill="#27ae60" />
		<text x="300" y="220" text-anchor="middle" font-size="80" font-weight="bold" fill="white">Må</text>
	</g>

	<g transform="translate(850, 350)" style="cursor: pointer;" onclick={() => selectStation('bjästa')}>
		<rect width="600" height="400" rx="30" fill="#2980b9" />
		<text x="300" y="220" text-anchor="middle" font-size="80" font-weight="bold" fill="white">Bjästa</text>
	</g>
</g>