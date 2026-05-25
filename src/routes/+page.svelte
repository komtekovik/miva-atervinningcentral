<script lang="ts">
	import { game, handlePointerMove, handlePointerUp } from '$lib/game.svelte';
	import { config } from '$lib/config';
	import { getDistance } from '$lib/utils';
	import GameMenu from '$lib/components/GameMenu.svelte';
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

	function updateSimulatedHover(pos: { x: number, y: number }) {
		let closestIndex: number | null = null;
		let minDistance = 80;
		for (let i = 0; i < game.mapIcons.length; i++) {
			const icon = game.mapIcons[i];
			const iconCenter = { x: icon.x + icon.w / 2, y: icon.y + icon.h / 2 };
			const dist = getDistance(pos, iconCenter);
			if (dist < minDistance) {
				minDistance = dist;
				closestIndex = i;
			}
		}

		if (closestIndex !== null) {
			game.hoveredIconIndex = closestIndex;
			game.activeTooltipIndex = closestIndex;
		} else {
			game.hoveredIconIndex = null;
			game.activeTooltipIndex = null;
		}
	}

	function onPointerDown(event: PointerEvent) {
		if (game.status !== 'playing' || game.isWrongDrop) return;
		
		const pos = getMousePosition(event);
		const isOverTrash = pos.x >= game.dragX - 175 && pos.x <= game.dragX + 175 &&
		                    pos.y >= game.dragY - 15 && pos.y <= game.dragY + 275;
		if (isOverTrash) {
			game.isDragging = true;
			if (hoverTimeout) clearTimeout(hoverTimeout);
			game.activeTooltipIndex = null;
			offsetX = pos.x - game.dragX;
			offsetY = pos.y - game.dragY;
		} else {
			updateSimulatedHover(pos);
		}
	}

	function onPointerMove(event: PointerEvent) {
		const pos = getMousePosition(event);
		if (game.isDragging) {
			handlePointerMove(pos.x - offsetX, pos.y - offsetY);
		} else if (event.buttons > 0 || event.pointerType === 'touch') {
			updateSimulatedHover(pos);
		}
	}

	function onPointerUp() {
		if (game.isDragging) {
			handlePointerUp();
		} else {
			game.hoveredIconIndex = null;
			game.activeTooltipIndex = null;
		}
	}

	function handleTooltipEnter(event: PointerEvent, index: number) {
		if (event.buttons > 0 || event.pointerType === 'touch') return;
		if (!game.isDragging) {
			game.hoveredIconIndex = index;
			if (hoverTimeout) clearTimeout(hoverTimeout);
			
			if (game.activeTooltipIndex !== null && game.activeTooltipIndex !== index) {
				game.activeTooltipIndex = index;
			} else if (game.activeTooltipIndex === null) {
				hoverTimeout = setTimeout(() => {
					game.activeTooltipIndex = index;
				}, config.timeouts.tooltip);
			}
		}
	}

	function handleTooltipLeave(event: PointerEvent, index: number) {
		if (event.buttons > 0 || event.pointerType === 'touch') return;
		if (game.hoveredIconIndex === index) {
			game.hoveredIconIndex = null;
		}
		if (game.activeTooltipIndex === index) {
			if (hoverTimeout) clearTimeout(hoverTimeout);
			game.activeTooltipIndex = null;
		}
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
				
				{#if game.highlightedContainerIndices.includes(originalIndex) && game.isHintCooldown}
					<circle 
						cx={icon.x + icon.w / 2} 
						cy={icon.y + icon.h / 2} 
						r={config.drop.barrierRadius} 
						fill="none" 
						stroke="#e74c3c" 
						stroke-width="6" 
						stroke-dasharray="15,10" 
						opacity="0.3" 
						pointer-events="none"
					/>
				{/if}

				<g
					class="icon-wrap {game.highlightedContainerIndices.includes(originalIndex) ? 'highlighted-hint' : ''} {game.hoveredContainerIndex === originalIndex || game.activeTooltipIndex === originalIndex || game.hoveredIconIndex === originalIndex ? 'hovered-target' : ''} {game.correctContainerIndex === originalIndex ? 'correct-drop' : ''}"
					style="transform-origin: {icon.x + icon.w / 2}px {icon.y + icon.h / 2}px;"
					onpointerenter={(e) => handleTooltipEnter(e, originalIndex)}
					onpointerleave={(e) => handleTooltipLeave(e, originalIndex)}
					role="group"
				>
					<IconComponent x={icon.x} y={icon.y} width={icon.w} height={icon.h} />
				</g>
			{/each}

			{#if game.status === 'start' || game.status === 'end'}
				<GameMenu />
			{/if}

			{#if game.status === 'playing'}
				<GameHud />
				<DraggableTrash />
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