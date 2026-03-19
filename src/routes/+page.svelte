<script lang="ts">
	import MapBase from '$lib/svg/map-base.svelte';
	import MapContainers from '$lib/svg/map-containers.svelte';
	import MapLabels from '$lib/svg/map-labels.svelte';
	import { mapIcons } from '$lib/map-icons';
	import { game, resetPosition, stopTimer } from '$lib/game.svelte';
	import StartScreen from '$lib/components/StartScreen.svelte';
	import EndScreen from '$lib/components/EndScreen.svelte';
	import GameHud from '$lib/components/GameHud.svelte';
	import DraggableTrash from '$lib/components/DraggableTrash.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	let svgElement: SVGSVGElement;
	let iconElements: SVGGElement[] = [];

	let offsetX = $state(0);
	let offsetY = $state(0);
	let hoverTimeout: ReturnType<typeof setTimeout>;

	function getMousePosition(event: PointerEvent) {
		if (!svgElement) return { x: 0, y: 0 };
		const rect = svgElement.getBoundingClientRect();
		const scaleX = 2481 / rect.width;
		const scaleY = 3508 / rect.height;
		return {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};
	}

	function handlePointerDown(event: PointerEvent) {
		if (game.status !== 'playing' || game.isWrongDrop) return;
		game.isDragging = true;

		if (hoverTimeout) clearTimeout(hoverTimeout);
		game.activeTooltipIndex = null;

		const pos = getMousePosition(event);
		offsetX = pos.x - game.dragX;
		offsetY = pos.y - game.dragY;
	}

	function handlePointerMove(event: PointerEvent) {
		if (!game.isDragging || game.status !== 'playing') return;
		const pos = getMousePosition(event);
		game.dragX = pos.x - offsetX;
		game.dragY = pos.y - offsetY;

		const hintX = 2250;
		const hintY = 2925;
		const currentItem = game.trashItems[game.currentIndex];
		const distToHint = Math.sqrt(Math.pow(game.dragX - hintX, 2) + Math.pow(game.dragY - hintY, 2));

		if (distToHint < 150) {
			game.message = `Dra till behållaren med ${currentItem.category}`;
			let newHighlights = [];
			for (let i = 0; i < mapIcons.length; i++) {
				if (mapIcons[i].component === currentItem.target) {
					newHighlights.push(i);
				}
			}
			game.highlightedContainerIndices = newHighlights;
		} else {
			if (game.message.startsWith('Dra till')) {
				game.message = 'Sortera skräpet!';
			}
			game.highlightedContainerIndices = [];
		}

		let foundHover = null;
		let minDistance = 150;
		for (let i = 0; i < mapIcons.length; i++) {
			const target = mapIcons[i];
			const targetCenterX = target.x + target.w / 2;
			const targetCenterY = target.y + target.h / 2;
			const dx = game.dragX - targetCenterX;
			const dy = game.dragY - targetCenterY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < minDistance) {
				minDistance = distance;
				foundHover = i;
			}
		}
		game.hoveredContainerIndex = foundHover;
	}

	function handlePointerUp() {
		if (!game.isDragging || game.status !== 'playing') return;
		game.isDragging = false;
		const currentItem = game.trashItems[game.currentIndex];
		game.highlightedContainerIndices = [];
		game.hoveredContainerIndex = null;

		const hintX = 2250;
		const hintY = 2925;
		const distToHint = Math.sqrt(Math.pow(game.dragX - hintX, 2) + Math.pow(game.dragY - hintY, 2));

		if (distToHint < 150) {
			game.message = `Tips: Sorteras som ${currentItem.category}`;
			resetPosition();
			return;
		}

		let isCorrect = false;
		for (let i = 0; i < mapIcons.length; i++) {
			const target = mapIcons[i];
			if (target.component === currentItem.target) {
				const targetCenterX = target.x + target.w / 2;
				const targetCenterY = target.y + target.h / 2;
				const dx = game.dragX - targetCenterX;
				const dy = game.dragY - targetCenterY;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 150) {
					isCorrect = true;
					if (iconElements[i]) {
						iconElements[i].classList.add('correct-drop');
						setTimeout(() => {
							if (iconElements[i]) {
								iconElements[i].classList.remove('correct-drop');
							}
						}, 500);
					}
					break;
				}
			}
		}

		if (isCorrect) {
			game.message = 'Snyggt!';
			game.currentIndex++;

			if (game.currentIndex >= game.trashItems.length) {
				game.status = 'end';
				stopTimer();
			} else {
				resetPosition();
			}
		} else {
			game.message = 'Fel, försök igen!';
			game.isWrongDrop = true;

			setTimeout(() => {
				game.isWrongDrop = false;
				resetPosition();
			}, 500);
		}
	}

	function handleTooltipEnter(index: number) {
		if (!game.isDragging) {
			if (hoverTimeout) clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => {
				game.activeTooltipIndex = index;
			}, 200);
		}
	}

	function handleTooltipLeave() {
		if (hoverTimeout) clearTimeout(hoverTimeout);
		game.activeTooltipIndex = null;
	}
</script>

<svelte:window onpointermove={handlePointerMove} onpointerup={handlePointerUp} />

<div class="viewport">
	<main class="map-container">
		<MapBase />
		<MapContainers />
		<MapLabels />

		<svg bind:this={svgElement} viewBox="0 0 2481 3508" class="icons-layer">
			{#each mapIcons as icon, i}
				<g
					bind:this={iconElements[i]}
					class="icon-wrap {game.highlightedContainerIndices.includes(i) ? 'highlighted-hint' : ''} {game.hoveredContainerIndex === i || game.activeTooltipIndex === i ? 'hovered-target' : ''}"
					style="transform-origin: {icon.x + icon.w / 2}px {icon.y + icon.h / 2}px;"
					onpointerenter={() => handleTooltipEnter(i)}
					onpointerleave={handleTooltipLeave}
				>
					<svelte:component this={icon.component.default} x={icon.x} y={icon.y} width={icon.w} height={icon.h} />
				</g>
			{/each}

			{#if game.status === 'start'}
				<StartScreen />
			{/if}

			{#if game.status === 'playing'}
				<GameHud />
				<DraggableTrash {handlePointerDown} />
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
		height: 125vh;
		aspect-ratio: 2481 / 3508;
		background: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		user-select: none;
		touch-action: none;
		position: relative;
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