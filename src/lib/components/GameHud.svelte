<script lang="ts">
	import { game, goToStart } from '$lib/game.svelte';
	import { config } from '$lib/config';
	import mivoIdle from '$lib/assets/mivo_idle.png';
	import mivoTalk from '$lib/assets/mivo_talk.png';
	import mivoTummenupp from '$lib/assets/mivo_tummenupp.png';
</script>

<g transform="translate({config.startPos[game.currentMapId].x}, {config.startPos[game.currentMapId].y})">
	<rect x="-80" y="-60" width="160" height="120" rx="8" fill="#95a5a6" stroke="#2c3e50" stroke-width="6" />
	
	<line x1="80" y1="0" x2="110" y2="0" stroke="#2c3e50" stroke-width="8" />
	
	<rect x="110" y="-45" width="140" height="90" rx="15" fill="#e74c3c" stroke="#2c3e50" stroke-width="6" />
	
	<rect x="140" y="-35" width="70" height="70" rx="8" fill="#2c3e50" />
	<rect x="150" y="-25" width="50" height="50" rx="4" fill="#34495e" />
	
	<rect x="235" y="-35" width="10" height="20" rx="3" fill="#f1c40f" />
	<rect x="235" y="15" width="10" height="20" rx="3" fill="#f1c40f" />
</g>

<g transform="translate({config.startPos[game.currentMapId].x + config.cancel.offsetX}, {config.startPos[game.currentMapId].y + config.cancel.offsetY})" style="cursor: pointer;"
onclick={goToStart}>
	<rect width="300" height="120" rx="15" fill="#e74c3c" />
	<text x="150" y="75" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Avbryt</text>
</g>

<g transform="translate({config.startPos[game.currentMapId].x + config.cancel.offsetX + 450}, {config.startPos[game.currentMapId].y + config.cancel.offsetY + 75})">
	<!-- <rect width="800" height="650" rx="20" fill="white" stroke="#2c3e50" stroke-width="6" />
	<text x="400" y="100" text-anchor="middle" font-size="55" font-weight="bold" fill={game.isWrongDrop ?
'#e74c3c' : '#2c3e50'}>{game.message}</text>  -->
	<text x="0" y="25" text-anchor="middle" font-size="40" fill="#7f8c8d">Skräp {game.currentIndex + 1} av {game.trashItems.length}</text>
	<text x="0" y="-25" text-anchor="middle" font-size="45" font-weight="bold" fill="#34495e">Tid: {game.timeElapsed} s</text>
</g>

<g transform="translate({config.startPos[game.currentMapId].x + config.hint.offsetX}, {config.startPos[game.currentMapId].y + config.hint.offsetY})">

	<image 
		href={
			game.message === 'Snyggt!' ? mivoTummenupp : 
			(game.isHoveringHint || game.message.includes('Tips:') || game.message === 'Fel, försök igen!') ? mivoTalk : 
			mivoIdle
		}
		x={-config.hint.width / 2}
		y={-config.hint.height / 2}
		width={config.hint.width}
		height={config.hint.height}
		pointer-events="none"
	/>
</g>