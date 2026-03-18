<script lang="ts">
	import MapBase from '$lib/svg/map-base.svelte';
	import MapContainers from '$lib/svg/map-containers.svelte';
	import MapLabels from '$lib/svg/map-labels.svelte';
	import { mapIcons } from '$lib/map-icons';
	import { allTrashItems } from '$lib/trash-items';

	let svgElement: SVGSVGElement;
	let iconElements: SVGGElement[] = [];

	let trashItems = $state<typeof allTrashItems>([]);
	let gameState = $state('start');
	let currentIndex = $state(0);
	let timeElapsed = $state(0);
	let message = $state('');
	let timerInterval: ReturnType<typeof setInterval>;
	const startX = 500;
	const startY = 550;

	let dragX = $state(startX);
	let dragY = $state(startY);
	let isDragging = $state(false);
	let isWrongDrop = $state(false);

	let offsetX = $state(0);
	let offsetY = $state(0);

	let highlightedContainerIndices = $state<number[]>([]);
	let hoveredContainerIndex = $state<number | null>(null);
	let activeTooltipIndex = $state<number | null>(null);

	let hoverTimeout: ReturnType<typeof setTimeout>;

	function startGame() {
		gameState = 'playing';
		currentIndex = 0;
		timeElapsed = 0;
		message = 'Sortera skräpet!';
		isWrongDrop = false;
		highlightedContainerIndices = [];
		hoveredContainerIndex = null;
		activeTooltipIndex = null;

		trashItems = [...allTrashItems]
			.sort(() => 0.5 - Math.random())
			.slice(0, 15);

		if (timerInterval) clearInterval(timerInterval);
		timerInterval = setInterval(() => {
			timeElapsed++;
		}, 1000);

		resetPosition();
	}

	function resetPosition() {
		dragX = startX;
		dragY = startY;
	}

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
		if (gameState !== 'playing' || isWrongDrop) return;
		isDragging = true;

		if (hoverTimeout) clearTimeout(hoverTimeout);
		activeTooltipIndex = null;
		const pos = getMousePosition(event);
		offsetX = pos.x - dragX;
		offsetY = pos.y - dragY;
	}

	function handlePointerMove(event: PointerEvent) {
		if (!isDragging || gameState !== 'playing') return;
		const pos = getMousePosition(event);
		dragX = pos.x - offsetX;
		dragY = pos.y - offsetY;

		const hintX = 2250;
		const hintY = 2925;
		const currentItem = trashItems[currentIndex];
		const distToHint = Math.sqrt(Math.pow(dragX - hintX, 2) + Math.pow(dragY - hintY, 2));

		if (distToHint < 150) {
			message = `Dra till behållaren med ${currentItem.category}`;

			let newHighlights = [];
			for (let i = 0; i < mapIcons.length; i++) {
				if (mapIcons[i].component === currentItem.target) {
					newHighlights.push(i);
				}
			}
			highlightedContainerIndices = newHighlights;
		} else {
			if (message.startsWith('Dra till')) {
				message = 'Sortera skräpet!';
			}
			highlightedContainerIndices = [];
		}

		let foundHover = null;
		let minDistance = 150;
		for (let i = 0; i < mapIcons.length; i++) {
			const target = mapIcons[i];
			const targetCenterX = target.x + target.w / 2;
			const targetCenterY = target.y + target.h / 2;
			const dx = dragX - targetCenterX;
			const dy = dragY - targetCenterY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < minDistance) {
				minDistance = distance;
				foundHover = i;
			}
		}
		hoveredContainerIndex = foundHover;
	}

	function handlePointerUp() {
		if (!isDragging || gameState !== 'playing') return;
		isDragging = false;
		const currentItem = trashItems[currentIndex];
		highlightedContainerIndices = [];
		hoveredContainerIndex = null;

		const hintX = 2250;
		const hintY = 2925;
		const distToHint = Math.sqrt(Math.pow(dragX - hintX, 2) + Math.pow(dragY - hintY, 2));

		if (distToHint < 150) {
			message = `Tips: Sorteras som ${currentItem.category}`;
			resetPosition();
			return;
		}

		let isCorrect = false;
		for (let i = 0; i < mapIcons.length; i++) {
			const target = mapIcons[i];
			if (target.component === currentItem.target) {
				const targetCenterX = target.x + target.w / 2;
				const targetCenterY = target.y + target.h / 2;
				const dx = dragX - targetCenterX;
				const dy = dragY - targetCenterY;
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
			message = 'Snyggt!';
			currentIndex++;

			if (currentIndex >= trashItems.length) {
				gameState = 'end';
				clearInterval(timerInterval);
			} else {
				resetPosition();
			}
		} else {
			message = 'Fel, försök igen!';
			isWrongDrop = true;

			setTimeout(() => {
				isWrongDrop = false;
				resetPosition();
			}, 500);
		}
	}

	function handleTooltipEnter(index: number) {
		if (!isDragging) {
			if (hoverTimeout) clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => {
				activeTooltipIndex = index;
			}, 200);
		}
	}

	function handleTooltipLeave() {
		if (hoverTimeout) clearTimeout(hoverTimeout);
		activeTooltipIndex = null;
	}

	function getTooltipData(icon: any) {
		return {
			title: icon.component.title || 'Okänd',
			description: icon.component.description || '',
			color: icon.component.color || '#1e3c72'
		};
	}
</script>

<svelte:window onpointermove={handlePointerMove} onpointerup={handlePointerUp} />

<main class="map-container">
	<MapBase />
	<MapContainers />
	<MapLabels />

	<svg bind:this={svgElement} viewBox="0 0 2481 3508" class="icons-layer">
		{#each mapIcons as icon, i}
			<g
				bind:this={iconElements[i]}
				class="icon-wrap {highlightedContainerIndices.includes(i) ? 'highlighted-hint' : ''} {hoveredContainerIndex === i || activeTooltipIndex === i ? 'hovered-target' : ''}"
				style="transform-origin: {icon.x + icon.w / 2}px {icon.y + icon.h / 2}px;"
				onpointerenter={() => handleTooltipEnter(i)}
				onpointerleave={handleTooltipLeave}
			>
				<svelte:component this={icon.component.default} x={icon.x} y={icon.y} width={icon.w} height={icon.h} />
			</g>
		{/each}

		{#if gameState === 'start'}
			<g transform="translate(100, 100)">
				<rect width="800" height="450" rx="30" fill="white" stroke="#2c3e50" stroke-width="8" />
				<text x="400" y="160" text-anchor="middle" font-size="70" font-weight="bold" fill="#2c3e50">Återvinningsspelet</text>
				<text x="400" y="250" text-anchor="middle" font-size="40" fill="#34495e">Dra skräpet till rätt plats på kartan</text>
				<g transform="translate(250, 320)" style="cursor: pointer;"
				onclick={startGame}>
					<rect width="300" height="80" rx="40" fill="#27ae60" />
					<text x="150" y="55" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Starta</text>
				</g>
			</g>
		{/if}

		{#if gameState === 'playing'}
			<g transform="translate(100, 100)">
				<rect width="800" height="900" rx="20" fill="white" stroke="#2c3e50" stroke-width="6" />
				<text x="400" y="120" text-anchor="middle" font-size="55" font-weight="bold" fill={isWrongDrop ?
				'#e74c3c' : '#2c3e50'}>{message}</text>
				<text x="400" y="200" text-anchor="middle" font-size="40" fill="#7f8c8d">Skräp {currentIndex + 1} av {trashItems.length}</text>
				<text x="400" y="280" text-anchor="middle" font-size="45" font-weight="bold" fill="#34495e">Tid: {timeElapsed} s</text>
			</g>

			<g transform="translate(2250, 2925)">
				<circle cx="0" cy="0" r="120" fill="#f39c12" stroke="white" stroke-width="12" />
				<text x="0" y="40" text-anchor="middle" font-size="120" font-weight="bold" fill="white">?</text>
			</g>

			<g
				class="draggable-trash {isDragging ? 'dragging' : ''} {isWrongDrop ? 'shake-container' : ''}"
				transform="translate({dragX}, {dragY}) {isDragging ? 'scale(1.15)' : 'scale(1)'}"
				onpointerdown={handlePointerDown}
			>
				<g class="shake-inner {isWrongDrop ? 'shake' : ''}">
					<path d="M 0 0 L 25 40 L 140 40 Q 160 40 160 60 L 160 240 Q 160 260 140 260 L -140 260 Q -160 260 -160 240 L -160 60 Q -160 40 -140 40 L -25 40 Z"
					fill="white" stroke="#2c3e50" stroke-width="6" />
					<text x="0" y="125" text-anchor="middle" dominant-baseline="middle" font-size="120" font-weight="bold" fill="#2c3e50">
						{trashItems[currentIndex].icon}
					</text>
					<text x="0" y="215" text-anchor="middle" dominant-baseline="middle" font-size="32" font-weight="bold" fill="#2c3e50">
						{trashItems[currentIndex].name}
					</text>
				</g>
			</g>
		{/if}

		{#if gameState === 'end'}
			<g transform="translate(100, 100)">
				<rect width="800" height="400" rx="30" fill="white" stroke="#2c3e50" stroke-width="8" />
				<text x="400" y="150" text-anchor="middle" font-size="80" font-weight="bold" fill="#2c3e50">Bra jobbat!</text>
				<text x="400" y="230" text-anchor="middle" font-size="50" fill="#34495e">Din tid blev {timeElapsed} sekunder.</text>
				<g transform="translate(250, 280)" style="cursor: pointer;"
				onclick={startGame}>
					<rect width="300" height="80" rx="40" fill="#3498db" />
					<text x="150" y="55" text-anchor="middle" font-size="45" font-weight="bold" fill="white">Spela igen</text>
				</g>
			</g>
		{/if}
	</svg>

	<div class="tooltip-layer">
		{#if activeTooltipIndex !== null && !isDragging}
			{@const tooltipIcon = mapIcons[activeTooltipIndex]}
			{@const tooltipData = getTooltipData(tooltipIcon)}
			<div class="tooltip-card" style="left: {(tooltipIcon.x + tooltipIcon.w / 2) / 2481 * 100}%; top: {(tooltipIcon.y) / 3508 * 100}%;">
				<div class="tooltip-header">
					<h2>{tooltipData.title}</h2>
					<div class="tooltip-icon-wrapper" style="background: {tooltipData.color}">
						<svg viewBox="0 0 {tooltipIcon.w} {tooltipIcon.h}">
							<svelte:component this={tooltipIcon.component.default} x="0" y="0" width={tooltipIcon.w} height={tooltipIcon.h} />
						</svg>
					</div>
				</div>
				<hr class="tooltip-divider" />
				<p>{tooltipData.description}</p>
			</div>
		{/if}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 20px;
		background-color: #f4f4f4;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	.map-container {
		display: grid;
		width: 100%;
		max-width: 1200px;
		aspect-ratio: 2481 / 3508;
		background: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		user-select: none;
		touch-action: none;
		scale: 0.8;
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

	.draggable-trash {
		cursor: grab;
		transition: transform 0.15s ease-out, filter 0.15s ease-out;
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

	.tooltip-layer {
		grid-area: 1 / 1;
		position: relative;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 10;
	}

	.tooltip-card {
		position: absolute;
		transform: translate(-50%, -110%);
		background: white;
		border-radius: 12px;
		padding: 20px;
		width: max-content;
		min-width: 250px;
		max-width: 320px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.tooltip-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
	}

	.tooltip-header h2 {
		margin: 0;
		font-size: 24px;
		font-weight: 700;
		color: #333;
	}

	.tooltip-icon-wrapper {
		border-radius: 8px;
		width: 48px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.tooltip-icon-wrapper svg {
		width: 32px;
		height: 32px;
	}

	.tooltip-divider {
		border: none;
		border-top: 1px solid #eaeaea;
		margin: 0;
	}

	.tooltip-card p {
		margin: 0;
		font-size: 16px;
		color: #444;
		line-height: 1.5;
	}
</style>