import { allTrashItems } from './trash-items';
import { mapIcons as maIcons } from './svg/må/map-icons';
import { mapIcons as bjastaIcons } from './svg/bjästa/map-icons';
import { mapIcons as bjornaIcons } from './svg/björna/map-icons';
import { mapIcons as husumIcons } from './svg/husum/map-icons';
import { mapIcons as bredbynIcons } from './svg/bredbyn/map-icons';
import { config } from './config';
import { getDistance } from './utils';

const mapRegistry = {
	må: maIcons,
	bjästa: bjastaIcons,
	björna: bjornaIcons,
	husum: husumIcons,
	bredbyn: bredbynIcons
};

const isClient = typeof window !== 'undefined';

function getStoredBestTime(mapId: string): number | null {
	if (!isClient) return null;
	const val = localStorage.getItem(`best_time_${mapId}`);
	return val ? parseInt(val, 10) : null;
}

export const game = $state({
	status: 'start',
	currentMapId: 'må' as keyof typeof mapRegistry,
	currentIndex: 0,
	timeElapsed: 0,
	message: '',
	trashItems: [] as typeof allTrashItems,
	isWrongDrop: false,
	dragX: config.startPos.må.x,
	dragY: config.startPos.må.y,
	isDragging: false,
	highlightedContainerIndices: [] as number[],
	hoveredContainerIndex: null as number | null,
	hoveredIconIndex: null as number | null,
	activeTooltipIndex: null as number | null,
	correctContainerIndex: null as number | null,
	isHoveringHint: false,
	bestTimes: {
		må: getStoredBestTime('må'),
		bjästa: getStoredBestTime('bjästa'),
		björna: getStoredBestTime('björna'),
		husum: getStoredBestTime('husum'),
		bredbyn: getStoredBestTime('bredbyn')
	},
	get mapIcons() {
		return mapRegistry[this.currentMapId];
	},
	get sortedMapIcons() {
		return this.mapIcons
			.map((icon: any, originalIndex: number) => ({ icon, originalIndex }))
			.sort((a, b) => {
				const aIsActive = this.hoveredIconIndex === a.originalIndex || 
								  this.hoveredContainerIndex === a.originalIndex || 
								  this.highlightedContainerIndices.includes(a.originalIndex);
				const bIsActive = this.hoveredIconIndex === b.originalIndex || 
								  this.hoveredContainerIndex === b.originalIndex || 
								  this.highlightedContainerIndices.includes(b.originalIndex);
				
				return Number(aIsActive) - Number(bIsActive);
			});
	},
	get hintPos() {
		return {
			x: config.hintPos[this.currentMapId].x,
			y: config.hintPos[this.currentMapId].y
		};
	}
});

let timerInterval: ReturnType<typeof setInterval>;

export function selectStation(mapId: keyof typeof mapRegistry) {
	game.currentMapId = mapId;
	startGame();
}

export function startGame() {
	game.status = 'playing';
	game.currentIndex = 0;
	game.timeElapsed = 0;
	game.message = 'Sortera skräpet!';
	game.isWrongDrop = false;
	game.highlightedContainerIndices = [];
	game.hoveredContainerIndex = null;
	game.hoveredIconIndex = null;
	game.activeTooltipIndex = null;
	game.correctContainerIndex = null;
	game.isHoveringHint = false;

	const validTargetIds = game.mapIcons.map((icon: any) => icon.id);
	const availableItems = allTrashItems.filter(item => validTargetIds.includes(item.targetId));

	const shuffled = [...availableItems];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	game.trashItems = shuffled.slice(0, 15);

	if (timerInterval) clearInterval(timerInterval);
	timerInterval = setInterval(() => {
		game.timeElapsed++;
	}, 1000);

	resetPosition();
}

export function resetPosition() {
	game.dragX = config.startPos[game.currentMapId].x;
	game.dragY = config.startPos[game.currentMapId].y;
}

export function stopTimer() {
	clearInterval(timerInterval);
}

export function goToStart() {
	game.status = 'start';
	stopTimer();
}

export function handlePointerMove(x: number, y: number) {
	if (!game.isDragging || game.status !== 'playing') return;

	game.dragX = x;
	game.dragY = y;

	const currentItem = game.trashItems[game.currentIndex];
	
	const trashCenterX = x;
	const trashCenterY = y + 100;

	const mivoLeft = game.hintPos.x - config.hint.width / 2;
	const mivoRight = game.hintPos.x + config.hint.width / 2;
	const mivoTop = game.hintPos.y - config.hint.height / 2;
	const mivoBottom = game.hintPos.y + config.hint.height / 2;

	const inHintArea = trashCenterX >= mivoLeft && trashCenterX <= mivoRight &&
					   trashCenterY >= mivoTop && trashCenterY <= mivoBottom;

	if (inHintArea !== game.isHoveringHint) {
		game.isHoveringHint = inHintArea;
		
		if (inHintArea) {
			game.message = `Dra till behållaren med ${currentItem.category}`;
			game.highlightedContainerIndices = game.mapIcons
				.map((icon: any, index: number) => (icon.id === currentItem.targetId ? index : -1))
				.filter((index: number) => index !== -1);
		} else {
			if (game.message.startsWith('Dra till')) {
				game.message = 'Sortera skräpet!';
			}
			game.highlightedContainerIndices = [];
		}
	}

	let foundHover: number | null = null;
	let minDistance = config.drop.radius;

	for (let i = 0; i < game.mapIcons.length; i++) {
		const target = game.mapIcons[i];
		const targetCenter = { x: target.x + target.w / 2, y: target.y + target.h / 2 };
		const distance = getDistance({ x, y }, targetCenter);

		if (distance < minDistance) {
			minDistance = distance;
			foundHover = i;
		}
	}
	
	if (game.hoveredContainerIndex !== foundHover) {
		game.hoveredContainerIndex = foundHover;
	}
}

export function handlePointerUp() {
	if (!game.isDragging || game.status !== 'playing') return;

	game.isDragging = false;
	const currentItem = game.trashItems[game.currentIndex];
	
	const wasHoveringHint = game.isHoveringHint;
	
	game.highlightedContainerIndices = [];
	game.hoveredContainerIndex = null;
	game.isHoveringHint = false;

	if (wasHoveringHint) {
		game.message = `Tips: Sorteras som ${currentItem.category}`;
		resetPosition();
		return;
	}

	let isCorrect = false;

	for (let i = 0; i < game.mapIcons.length; i++) {
		const target = game.mapIcons[i];
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

			const currentBest = game.bestTimes[game.currentMapId];
			if (currentBest === null || game.timeElapsed < currentBest) {
				game.bestTimes[game.currentMapId] = game.timeElapsed;
				if (typeof window !== 'undefined') {
					localStorage.setItem(`best_time_${game.currentMapId}`, game.timeElapsed.toString());
				}
			}
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