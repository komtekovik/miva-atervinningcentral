<script lang="ts">
	import { selectStation } from '$lib/game.svelte';
</script>

<g transform="translate(440, 1100)">
	<rect width="1600" height="1350" rx="50" fill="white" stroke="#2c3e50" stroke-width="12" />
	
	<text x="800" y="200" text-anchor="middle" font-size="100" font-weight="bold" fill="#2c3e50">
		Välj återvinningsstation
	</text>

	<g transform="translate(80, 350)" style="cursor: pointer;" onclick={() => selectStation('må')}>
		<rect width="450" height="400" rx="30" fill="#27ae60" />
		<text x="225" y="220" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Må</text>
	</g>

	<g transform="translate(575, 350)" style="cursor: pointer;" onclick={() => selectStation('bjästa')}>
		<rect width="450" height="400" rx="30" fill="#2980b9" />
		<text x="225" y="220" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Bjästa</text>
	</g>

	<g transform="translate(1070, 350)" style="cursor: pointer;" onclick={() => selectStation('björna')}>
		<rect width="450" height="400" rx="30" fill="#8e44ad" />
		<text x="225" y="220" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Björna</text>
	</g>

	<g transform="translate(327, 800)" style="cursor: pointer;" onclick={() => selectStation('husum')}>
		<rect width="450" height="400" rx="30" fill="#e67e22" />
		<text x="225" y="220" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Husum</text>
	</g>

	<g transform="translate(822, 800)" style="cursor: pointer;" onclick={() => selectStation('bredbyn')}>
		<rect width="450" height="400" rx="30" fill="#c0392b" />
		<text x="225" y="220" text-anchor="middle" font-size="70" font-weight="bold" fill="white">Bredbyn</text>
	</g>
</g>