import { allTrashItems } from '$lib/trash-items';

export const startX = 500;
// Vi flyttar ner start-Y från 550 till 900 för att kompensera för inzoomningen (ca 350 enheter kapat i toppen)
export const startY = 750; 

export const game = $state({
	status: 'start',
	currentIndex: 0,
	timeElapsed: 0,
	message: '',
	trashItems: [] as typeof allTrashItems,
	isWrongDrop: false,
	dragX: startX,
	dragY: startY,
	isDragging: false,
	highlightedContainerIndices: [] as number[],
	hoveredContainerIndex: null as number | null,
	activeTooltipIndex: null as number | null
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
	game.trashItems = [...allTrashItems].sort(() => 0.5 - Math.random()).slice(0, 15);

	if (timerInterval) clearInterval(timerInterval);
	timerInterval = setInterval(() => {
		game.timeElapsed++;
	}, 1000);

	resetPosition();
}

export function resetPosition() {
	game.dragX = startX;
	game.dragY = startY;
}

export function stopTimer() {
	clearInterval(timerInterval);
}