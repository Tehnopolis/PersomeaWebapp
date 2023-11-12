<script setup lang="ts">
interface AppCardProps {
	icon: string;
	title: string;
	description: string;
}

defineProps<AppCardProps>();
</script>

<template>
	<div class="card">
		<div class="icon_wrapper">
			<img :src="icon" alt="icon" class="icon" />
		</div>
		<h3 class="title">{{ title }}</h3>
		<p class="description">{{ description }}</p>
	</div>
</template>

<style scoped>
.card {
	text-align: left !important;
	max-width: 320px;

	.icon_wrapper {
		padding: 12px;
		border-radius: 10px;
		opacity: 0.9;
		background: var(--color-card-icon-bg);
		width: fit-content;
		max-height: 48px;
		max-width: 48px;
		margin-bottom: 16px;

		.icon {
			width: 24px;
			height: 24px;
		}
	}

	.title {
		color: var(--color-card-title);
		font-size: var(--font-size-text);
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
		text-align: left;
		margin-bottom: 8px;
	}

	.description {
		color: var(--color-card-description);
		font-size: var(--font-size-base);
		font-style: normal;
		font-weight: 400;
		line-height: 112.336%;
	}
}
</style>
