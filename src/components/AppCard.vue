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
		<div class="card__icon-wrapper">
			<img :src="icon" alt="icon" class="card__icon" />
		</div>
		<h3 class="card__title">{{ title }}</h3>
		<p class="card__description">{{ description }}</p>
	</div>
</template>

<style scoped lang="scss">
.card {
	text-align: left !important;
	max-width: 320px;

	&__icon-wrapper {
		padding: 12px;
		border-radius: 10px;
		opacity: 0.9;
		background: var(--color-card-icon-bg);
		width: fit-content;
		max-height: 48px;
		max-width: 48px;
		margin-bottom: 16px;

		&__icon {
			width: 24px;
			height: 24px;
		}
	}

	&__title {
		color: var(--color-card-title);
		font-size: var(--font-size-text);
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
		text-align: left;
		margin-bottom: 8px;
	}

	&__description {
		color: var(--color-card-description);
		font-size: var(--font-size-base);
		font-style: normal;
		font-weight: 400;
		line-height: 112.336%;
	}
}
</style>
