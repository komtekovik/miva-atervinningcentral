import { game, resetPosition, stopTimer } from '$lib/game.svelte';
import { mapIcons } from '$lib/map-icons';

export function draggable(node: SVGElement) {
	let offsetX = 0;
	let offsetY = 0;

	function getSvgPoint(event: PointerEvent) {
		const svg = node.ownerSVGElement;
		if (!svg) return { x: 0, y: 0 };
		const rect = svg.getBoundingClientRect();
		const scaleX = 2481 / rect.width;
		const scaleY = 3508 / rect.height;
		return {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};
	}

	function onPointerDown(event: PointerEvent) {
		if (game.status !== 'playing' || game.isWrongDrop) return;
		game.isDragging = true;
		game.activeTooltipIndex = null;

		const pos = getSvgPoint(event);
		offsetX = pos.x - game.dragX;
		offsetY = pos.y - game.dragY;

		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('pointerup', onPointerUp);
	}

	function onPointerMove(event: PointerEvent) {
		if (!game.isDragging || game.status !== 'playing') return;
		const pos = getSvgPoint(event);
		game.dragX = pos.x - offsetX;
		game.dragY = pos.y - offsetY;

		const hintX = 2250;
		const hintY = 2925;
		const currentItem = game.trashItems[game.currentIndex];
		const distToHint = Math.sqrt(Math.pow(game.dragX - hintX, 2) + Math.pow(game.dragY - hintY, 2));
		
		if (distToHint < 150) {
			game.message = `Dra till behållaren med ${currentItem.category}`;
			game.highlightedContainerIndices = mapIcons
				.map((icon, index) => icon.id === currentItem.targetId ? index : -1)
				.filter(index => index !== -1);
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

	function onPointerUp(event: PointerEvent) {
		if (!game.isDragging || game.status !== 'playing') return;
		game.isDragging = false;
		
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('pointerup', onPointerUp);

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
			if (target.id === currentItem.targetId) {
				const targetCenterX = target.x + target.w / 2;
				const targetCenterY = target.y + target.h / 2;
				const dx = game.dragX - targetCenterX;
				const dy = game.dragY - targetCenterY;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 150) {
					isCorrect = true;
					game.correctContainerIndex = i;
					setTimeout(() => {
						game.correctContainerIndex = null;
					}, 500);
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

	node.addEventListener('pointerdown', onPointerDown);

	return {
		destroy() {
			node.removeEventListener('pointerdown', onPointerDown);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
		}
	};
}