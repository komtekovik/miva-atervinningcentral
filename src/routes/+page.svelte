<script lang="ts">
	import MapBase from '$lib/svg/map-base.svelte';
	import MapContainers from '$lib/svg/map-containers.svelte';
	import MapLabels from '$lib/svg/map-labels.svelte';
	import { mapIcons } from '$lib/map-icons';
	import { game, handlePointerMove, handlePointerUp } from '$lib/game.svelte';
	import { config } from '$lib/config';
	import StartScreen from '$lib/components/StartScreen.svelte';
	import EndScreen from '$lib/components/EndScreen.svelte';
	import GameHud from '$lib/components/GameHud.svelte';
	import DraggableTrash from '$lib/components/DraggableTrash.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	let svgElement: SVGSVGElement;
	let offsetX = $state(0);
	let offsetY = $state(0);
	let hoverTimeout: ReturnType<typeof setTimeout>;

	function getMousePosition(event: PointerEvent) {
		if (!svgElement) return { x: 0, y: 0 };
		const rect = svgElement.getBoundingClientRect();
		const scaleX = config.map.width / rect.width;
		const scaleY = config.map.height / rect.height;
		return {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};
	}

	function onPointerDown(event: PointerEvent) {
		if (game.status !== 'playing' || game.isWrongDrop) return;
		game.isDragging = true;
		if (hoverTimeout) clearTimeout(hoverTimeout);
		game.activeTooltipIndex = null;
		
		const pos = getMousePosition(event);
		offsetX = pos.x - game.dragX;
		offsetY = pos.y - game.dragY;
	}

	function onPointerMove(event: PointerEvent) {
		if (!game.isDragging) return;
		const pos = getMousePosition(event);
		handlePointerMove(pos.x - offsetX, pos.y - offsetY);
	}

	function onPointerUp() {
		handlePointerUp();
	}

	function handleTooltipEnter(index: number) {
		if (!game.isDragging) {
			if (hoverTimeout) clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => {
				game.activeTooltipIndex = index;
			}, config.timeouts.tooltip);
		}
	}

	function handleTooltipLeave() {
		if (hoverTimeout) clearTimeout(hoverTimeout);
		game.activeTooltipIndex = null;
	}
</script>

<svelte:window onpointermove={onPointerMove} onpointerup={onPointerUp} />

<div class="viewport">
	<main class="map-container">
		<MapBase />
		<MapContainers />
		<MapLabels />

		<svg bind:this={svgElement} viewBox="0 0 {config.map.width} {config.map.height}" class="icons-layer" onpointerdown={onPointerDown}>
			{#each mapIcons as icon, i}
				{@const IconComponent = icon.component.default || icon.component}
				<g
					class="icon-wrap {game.highlightedContainerIndices.includes(i) ? 'highlighted-hint' : ''} {game.hoveredContainerIndex === i || game.activeTooltipIndex === i ? 'hovered-target' : ''} {game.correctContainerIndex === i ? 'correct-drop' : ''}"
					style="transform-origin: {icon.x + icon.w / 2}px {icon.y + icon.h / 2}px;"
					onpointerenter={() => handleTooltipEnter(i)}
					onpointerleave={handleTooltipLeave}
					role="group"
				>
					<IconComponent x={icon.x} y={icon.y} width={icon.w} height={icon.h} />
				</g>
			{/each}

			{#if game.status === 'start'}
				<StartScreen />
			{/if}

			{#if game.status === 'playing'}
				<GameHud />
				<DraggableTrash />
			{/if}

			{#if game.status === 'end'}
				<EndScreen />
			{/if}
		</svg>

		<Tooltip />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #f4f4f4;
		overflow: hidden;
	}

	.viewport {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.map-container {
		display: grid;
		width: min(100vw, 120vh * (2481 / 3508));
		height: min(120vh, 100vw * (3508 / 2481));
		background: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		user-select: none;
		touch-action: none;
		position: relative;
		overflow: hidden;
	}

	.map-container > :global(svg) {
		grid-area: 1 / 1;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.map-container > :global(svg.icons-layer) {
		pointer-events: auto;
	}

	.icon-wrap {
		transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.2s ease-out;
		cursor: default;
	}

	.icon-wrap.hovered-target {
		transform: scale(1.5);
		filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5));
	}

	.icon-wrap.correct-drop {
		animation: correct-pulse 0.5s ease-out;
	}

	.icon-wrap.highlighted-hint {
		transform: scale(1.6);
		animation: vibrate-hint 0.4s ease-in-out infinite;
		filter: drop-shadow(0px 15px 25px rgba(39, 174, 96, 0.6));
	}

	@keyframes vibrate-hint {
		0% { transform: scale(1.6) translate(0, 0) rotate(0); }
		20% { transform: scale(1.61) translate(-2px, -1px) rotate(-0.5deg); }
		40% { transform: scale(1.59) translate(1px, -2px) rotate(0.5deg); }
		60% { transform: scale(1.6) translate(-1px, 2px) rotate(-1deg); }
		80% { transform: scale(1.61) translate(2px, 1px) rotate(1deg); }
		100% { transform: scale(1.6) translate(0, 0) rotate(0); }
	}

	@keyframes correct-pulse {
		0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(39, 174, 96, 0.7)); }
		50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(39, 174, 96, 0.7)); }
		100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(39, 174, 96, 0)); }
	}
</style>