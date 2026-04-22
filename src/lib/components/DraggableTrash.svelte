<script lang="ts">
	import { game } from '$lib/game.svelte';
	import { draggable } from '$lib/actions/drag';
</script>

<g
	use:draggable
	class="draggable-trash {game.isDragging ? 'dragging' : ''} {game.isWrongDrop ? 'shake-container' : ''}"
	transform="translate({game.dragX}, {game.dragY}) {game.isDragging ? 'scale(1.15)' : 'scale(1)'}"
>
	<g class="shake-inner {game.isWrongDrop ? 'shake' : ''}">
		<path d="M 0 0 L 25 40 L 140 40 Q 160 40 160 60 L 160 240 Q 160 260 140 260 L -140 260 Q -160 260 -160 240 L -160 60 Q -160 40 -140 40 L -25 40 Z" fill="white" stroke="#2c3e50" stroke-width="6" />
		<text x="0" y="125" text-anchor="middle" dominant-baseline="middle" font-size="120" font-weight="bold" fill="#2c3e50">
			{game.trashItems[game.currentIndex]?.icon || ''}
		</text>
		<text x="0" y="215" text-anchor="middle" dominant-baseline="middle" font-size="32" font-weight="bold" fill="#2c3e50">
			{game.trashItems[game.currentIndex]?.name || ''}
		</text>
	</g>
</g>

<style>
	.draggable-trash {
		cursor: grab;
		transition: transform 0.15s ease-out, filter 0.15s ease-out;
		touch-action: none;
	}

	.draggable-trash.dragging {
		cursor: grabbing;
		transition: none;
		filter: drop-shadow(0px 25px 35px rgba(0, 0, 0, 0.4));
	}

	.draggable-trash.shake-container {
		filter: drop-shadow(0px 0px 10px rgba(231, 76, 60, 0.8));
	}

	.shake-inner.shake {
		animation: shake 0.5s linear;
	}

	@keyframes shake {
		0% { transform: translateX(0px); }
		10% { transform: translateX(-15px); }
		20% { transform: translateX(15px); }
		30% { transform: translateX(-15px); }
		40% { transform: translateX(15px); }
		50% { transform: translateX(-10px); }
		60% { transform: translateX(10px); }
		70% { transform: translateX(-5px); }
		80% { transform: translateX(5px); }
		100% { transform: translateX(0px); }
	}
</style>