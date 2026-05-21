<script lang="ts">
	import { game, handlePointerMove, handlePointerUp } from '$lib/game.svelte';
	import { config } from '$lib/config';
	import StartScreen from '$lib/components/StartScreen.svelte';
	import EndScreen from '$lib/components/EndScreen.svelte';
	import GameHud from '$lib/components/GameHud.svelte';
	import DraggableTrash from '$lib/components/DraggableTrash.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	import MapBaseMa from '$lib/svg/må/map-base.svelte';
	import MapContainersMa from '$lib/svg/må/map-containers.svelte';
	import MapLabelsMa from '$lib/svg/må/map-labels.svelte';

	import MapBaseBjasta from '$lib/svg/bjästa/map-base.svelte';
	import MapContainersBjasta from '$lib/svg/bjästa/map-containers.svelte';
	import MapLabelsBjasta from '$lib/svg/bjästa/map-labels.svelte';

	import MapBaseBjorna from '$lib/svg/björna/map-base.svelte';
	import MapContainersBjorna from '$lib/svg/björna/map-containers.svelte';
	import MapLabelsBjorna from '$lib/svg/björna/map-labels.svelte';

	import MapBaseHusum from '$lib/svg/husum/map-base.svelte';
	import MapContainersHusum from '$lib/svg/husum/map-containers.svelte';
	import MapLabelsHusum from '$lib/svg/husum/map-labels.svelte';

	import MapBaseBredbyn from '$lib/svg/bredbyn/map-base.svelte';
	import MapContainersBredbyn from '$lib/svg/bredbyn/map-containers.svelte';
	import MapLabelsBredbyn from '$lib/svg/bredbyn/map-labels.svelte';

	const mapComponents = {
		må: {
			base: MapBaseMa,
			containers: MapContainersMa,
			labels: MapLabelsMa
		},
		bjästa: {
			base: MapBaseBjasta,
			containers: MapContainersBjasta,
			labels: MapLabelsBjasta
		},
		björna: {
			base: MapBaseBjorna,
			containers: MapContainersBjorna,
			labels: MapLabelsBjorna
		},
		husum: {
			base: MapBaseHusum,
			containers: MapContainersHusum,
			labels: MapLabelsHusum
		},
		bredbyn: {
			base: MapBaseBredbyn,
			containers: MapContainersBredbyn,
			labels: MapLabelsBredbyn
		}
	};

	let svgElement: SVGSVGElement;
	let offsetX = $state(0);
	let offsetY = $state(0);
	let hoverTimeout: ReturnType<typeof setTimeout>;

	let currentMap = $derived(mapComponents[game.currentMapId]);

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
		<svelte:component this={currentMap.base} />
		<svelte:component this={currentMap.containers} />
		<svelte:component this={currentMap.labels} />

		<svg bind:this={svgElement} viewBox="0 0 {config.map.width} {config.map.height}" class="icons-layer" onpointerdown={onPointerDown}>
			{#each game.sortedMapIcons as { icon, originalIndex } (originalIndex)}
				{@const IconComponent = icon.component.default || icon.component}
				<g
					class="icon-wrap {game.highlightedContainerIndices.includes(originalIndex) ? 'highlighted-hint' : ''} {game.hoveredContainerIndex === originalIndex || game.activeTooltipIndex === originalIndex || game.hoveredIconIndex === originalIndex ? 'hovered-target' : ''} {game.correctContainerIndex === originalIndex ? 'correct-drop' : ''}"
					style="transform-origin: {icon.x + icon.w / 2}px {icon.y + icon.h / 2}px;"
					onpointerenter={() => {
						handleTooltipEnter(originalIndex);
						game.hoveredIconIndex = originalIndex;
					}}
					onpointerleave={() => {
						handleTooltipLeave();
						game.hoveredIconIndex = null;
					}}
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