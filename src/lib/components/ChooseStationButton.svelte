<script lang="ts">
	interface Props {
		x: number;
		y: number;
		fill: string;
		label: string;
		bestTime: number | null;
		onclick: () => void;
	}

	let { x, y, fill, label, bestTime, onclick }: Props = $props();
</script>

<g transform="translate({x}, {y})" style="cursor: pointer;" {onclick}>
	<rect width="450" height="400" rx="30" fill={fill} />
	<text x="225" y="190" text-anchor="middle" font-size="70" font-weight="bold" fill="white">{label}</text>
	<text x="225" y="290" text-anchor="middle" font-size="38" fill="white">
		{bestTime !== null ? `Bästa tid: ${bestTime}s` : 'Ingen tid än'}
	</text>
</g>