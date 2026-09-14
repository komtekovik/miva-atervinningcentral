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

export const game = $state({
	status: 'start',
	currentMapId: 'må' as keyof typeof mapRegistry,
	currentIndex: 0,
	timeElapsed: 0,
	message: '',
	trashItems: [] as typeof allTrashItems,
	isWrongDrop: false,
	isHintCooldown: false,
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
		må: null as number | null,
		bjästa: null as number | null,
		björna: null as number | null,
		husum: null as number | null,
		bredbyn: null as number | null
	},
	get mapIcons() {
		return mapRegistry[this.currentMapId];
	},
	get sortedMapIcons() {
		return this.mapIcons
			.map((icon: any, originalIndex: number) => ({ icon, originalIndex }))
			.sort((a, b) => {
				const aIsActive = this.highlightedContainerIndices.includes(a.originalIndex) ||
								  this.correctContainerIndex === a.originalIndex;
				const bIsActive = this.highlightedContainerIndices.includes(b.originalIndex) ||
								  this.correctContainerIndex === b.originalIndex;

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

if (typeof window !== 'undefined') {
	game.bestTimes.må = localStorage.getItem('best_time_må') ? parseInt(localStorage.getItem('best_time_må')!, 10) : null;
	game.bestTimes.bjästa = localStorage.getItem('best_time_bjästa') ? parseInt(localStorage.getItem('best_time_bjästa')!, 10) : null;
	game.bestTimes.björna = localStorage.getItem('best_time_björna') ? parseInt(localStorage.getItem('best_time_björna')!, 10) : null;
	game.bestTimes.husum = localStorage.getItem('best_time_husum') ? parseInt(localStorage.getItem('best_time_husum')!, 10) : null;
	game.bestTimes.bredbyn = localStorage.getItem('best_time_bredbyn') ? parseInt(localStorage.getItem('best_time_bredbyn')!, 10) : null;
}

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
	game.isHintCooldown = false;
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

	let currentX = game.dragX;
	let currentY = game.dragY;
	const currentItem = game.trashItems[game.currentIndex];

	const totalDx = x - currentX;
	const totalDy = y - currentY;
	const totalDist = Math.sqrt(totalDx * totalDx + totalDy * totalDy);

	if (totalDist > 0) {
		const stepSize = 5;
		const numSteps = Math.ceil(totalDist / stepSize);
		const stepX = totalDx / numSteps;
		const stepY = totalDy / numSteps;

		for (let step = 0; step < numSteps; step++) {
			currentX += stepX;
			currentY += stepY;

			if (game.isHintCooldown) {
				let resolved = false;
				let safetyCounter = 0;
				while (!resolved && safetyCounter < 10) {
					resolved = true;
					for (let i = 0; i < game.mapIcons.length; i++) {
						const targetIcon = game.mapIcons[i];
						if (targetIcon.id === currentItem.targetId) {
							const targetCenter = { x: targetIcon.x + targetIcon.w / 2, y: targetIcon.y + targetIcon.h / 2 };
							const dx = currentX - targetCenter.x;
							const dy = currentY - targetCenter.y;
							const distance = Math.sqrt(dx * dx + dy * dy);

							if (distance < config.drop.barrierRadius) {
								resolved = false;
								if (distance === 0) {
									currentX = targetCenter.x + config.drop.barrierRadius;
									currentY = targetCenter.y;
								} else {
									currentX = targetCenter.x + (dx / distance) * config.drop.barrierRadius;
									currentY = targetCenter.y + (dy / distance) * config.drop.barrierRadius;
								}
							}
						}
					}
					safetyCounter++;
				}
			}
		}
	}

	game.dragX = currentX;
	game.dragY = currentY;

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

		if (inHintArea && !game.isHintCooldown) {
			game.isHintCooldown = true;
			game.message = `Tips: Sorteras som ${currentItem.category}`;
			game.highlightedContainerIndices = game.mapIcons
				.map((icon: any, index: number) => (icon.id === currentItem.targetId ? index : -1))
				.filter((index: number) => index !== -1);

			setTimeout(() => {
				game.isHintCooldown = false;
				game.highlightedContainerIndices = [];
				if (game.status === 'playing' && game.message.startsWith('Tips:')) {
					game.message = 'Sortera skräpet!';
				}
			}, config.timeouts.hintCooldown);
		}
	}

	let foundHover: number | null = null;
	let minDistance = config.drop.radius;

	for (let i = 0; i < game.mapIcons.length; i++) {
		const target = game.mapIcons[i];
		const targetCenter = { x: target.x + target.w / 2, y: target.y + target.h / 2 };
		const distance = getDistance({ x: currentX, y: currentY }, targetCenter);

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

	game.hoveredContainerIndex = null;
	game.isHoveringHint = false;

	if (wasHoveringHint) {
		resetPosition();
		return;
	}

	if (game.isHintCooldown) {
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
				game.highlightedContainerIndices = [];
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
		game.highlightedContainerIndices = [];

		setTimeout(() => {
			game.isWrongDrop = false;
			resetPosition();
		}, config.timeouts.wrongDrop);
	}
}
