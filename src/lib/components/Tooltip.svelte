<script lang="ts">
	import { mapIcons } from '$lib/map-icons';
	import { game } from '$lib/game.svelte';

	function getTooltipData(icon: any) {
		return {
			title: icon.component.title || 'Okänd',
			description: icon.component.description || '',
			note: icon.component.note || '',
			color: icon.component.color || '#1e3c72'
		};
	}
</script>

<div class="tooltip-layer">
	{#if game.activeTooltipIndex !== null && !game.isDragging}
		{@const tooltipIcon = mapIcons[game.activeTooltipIndex]}
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
			<p>
				{tooltipData.description}
				{#if tooltipData.note}
					<br /><br />
					{tooltipData.note}
				{/if}
			</p>
		</div>
	{/if}
</div>

<style>
	.tooltip-layer {
		position: absolute;
		top: 0;
		left: 0;
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