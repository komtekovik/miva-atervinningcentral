import { allTrashItems } from './trash-items';
import { mapIcons } from './map-icons';
import { config } from './config';
import { getDistance } from './utils';

export const game = $state({
	status: 'start',
	currentIndex: 0,
	timeElapsed: 0,
	message: '',
	trashItems: [] as typeof allTrashItems,
	isWrongDrop: false,
	dragX: config.startPos.x,
	dragY: config.startPos.y,
	isDragging: false,
	highlightedContainerIndices: [] as number[],
	hoveredContainerIndex: null as number | null,
	activeTooltipIndex: null as number | null,
	correctContainerIndex: null as number | null
});

let timerInterval: ReturnType<typeof setInterval>;

export function startGame() {
	game.status = 'playing';
	game.currentIndex = 0;
	game.timeElapsed = 0;
	game.message = 'Sortera skräpet!';
	game.isWrongDrop = false;
	game.highlightedContainerIndices = [];
	game.hoveredContainerIndex = null;
	game.activeTooltipIndex = null;
	game.correctContainerIndex = null;
	game.trashItems = [...allTrashItems].sort(() => 0.5 - Math.random()).slice(0, 15);

	if (timerInterval) clearInterval(timerInterval);
	timerInterval = setInterval(() => {
		game.timeElapsed++;
	}, 1000);

	resetPosition();
}

export function resetPosition() {
	game.dragX = config.startPos.x;
	game.dragY = config.startPos.y;
}

export function stopTimer() {
	clearInterval(timerInterval);
}

export function handlePointerMove(x: number, y: number) {
	if (!game.isDragging || game.status !== 'playing') return;

	game.dragX = x;
	game.dragY = y;

	const currentItem = game.trashItems[game.currentIndex];
	const distToHint = getDistance({ x, y }, config.hint);

	if (distToHint < config.hint.radius) {
		game.message = `Dra till behållaren med ${currentItem.category}`;
		game.highlightedContainerIndices = mapIcons
			.map((icon, index) => (icon.id === currentItem.targetId ? index : -1))
			.filter((index) => index !== -1);
	} else {
		if (game.message.startsWith('Dra till')) {
			game.message = 'Sortera skräpet!';
		}
		game.highlightedContainerIndices = [];
	}

	let foundHover: number | null = null;
	let minDistance = config.drop.radius;

	for (let i = 0; i < mapIcons.length; i++) {
		const target = mapIcons[i];
		const targetCenter = { x: target.x + target.w / 2, y: target.y + target.h / 2 };
		const distance = getDistance({ x, y }, targetCenter);

		if (distance < minDistance) {
			minDistance = distance;
			foundHover = i;
		}
	}
	game.hoveredContainerIndex = foundHover;
}

export function handlePointerUp() {
	if (!game.isDragging || game.status !== 'playing') return;

	game.isDragging = false;
	const currentItem = game.trashItems[game.currentIndex];
	game.highlightedContainerIndices = [];
	game.hoveredContainerIndex = null;

	const distToHint = getDistance({ x: game.dragX, y: game.dragY }, config.hint);

	if (distToHint < config.hint.radius) {
		game.message = `Tips: Sorteras som ${currentItem.category}`;
		resetPosition();
		return;
	}

	let isCorrect = false;

	for (let i = 0; i < mapIcons.length; i++) {
		const target = mapIcons[i];
		if (target.id === currentItem.targetId) {
			const targetCenter = { x: target.x + target.w / 2, y: target.y + target.h / 2 };
			const distance = getDistance({ x: game.dragX, y: game.dragY }, targetCenter);

			if (distance < config.drop.radius) {
				isCorrect = true;
				game.correctContainerIndex = i;
				setTimeout(() => {
					game.correctContainerIndex = null;
				}, config.timeouts.correctDrop);
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
		}, config.timeouts.wrongDrop);
	}
}