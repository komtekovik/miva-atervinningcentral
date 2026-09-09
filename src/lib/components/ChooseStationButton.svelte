<script lang="ts">
	interface Props {
		x: number;
		y: number;
		fill: string;
		label: string;
		bestTime: number | null;
		isHard?: boolean;
		onclick: () => void;
	}
	let { x, y, fill, label, bestTime, isHard = false, onclick }: Props = $props();

	function getStars(time: number | null) {
		if (time === null) return 0;
		if (time <= 15) return 5;
		if (time <= 25) return 4;
		if (time <= 35) return 3;
		if (time <= 50) return 2;
		return 1;
	}
</script>

<g transform="translate({x}, {y})" style="cursor: pointer;" {onclick}>
	<rect width="640" height="150" rx="25" fill={fill} />

	<!-- Namn -->
	<text x="50" y="70" font-size="50" font-weight="bold" fill="white">{label}</text>

	<!-- Svårighetsmarkör (Endast för Må) -->
	{#if isHard}
		<rect x="150" y="35" width="140" height="40" rx="10" fill="rgba(0, 0, 0, 0.2)" />
		<text x="220" y="62" text-anchor="middle" font-size="20" font-weight="bold" fill="white">Extra svår</text>
	{/if}

	<!-- Prestationsstjärnor -->
	<text x="50" y="120" font-size="40" fill="#f1c40f">
		{bestTime !== null ? '★'.repeat(getStars(bestTime)) + '☆'.repeat(5 - getStars(bestTime)) : '☆☆☆☆☆'}
	</text>

	<!-- Bästa tid -->
	<text x="590" y="75" dominant-baseline="middle" text-anchor="end" font-size="35" fill="white">
		{bestTime !== null ? `Bästa tid: ${bestTime}s` : 'Ingen tid än'}
	</text>
</g>
