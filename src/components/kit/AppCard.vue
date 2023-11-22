<script setup lang="ts">
defineProps<{
	icon: string;
	title: string;
	description: string;
}>();
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
	max-width: 320px;

	text-align: left;

	&__icon-wrapper {
		height: 48px;
		width: 48px;

		margin-bottom: 16px;

		padding: 12px;

		display: flex;
		align-items: center;
		justify-content: center;

		background: var(--color-theme-box);
		opacity: 90%;

		border-radius: 10px;

		&__icon {
			width: 24px;
			height: 24px;
		}
	}

	&__title {
		margin-bottom: 8px;

		color: var(--color-theme-fg);

		font-size: var(--font-size-text);
		font-weight: 500;
		line-height: 100%;
		text-align: left;
	}

	&__description {
		color: var(--color-theme-fg3);

		font-size: var(--font-size-base);
		font-weight: 400;
	}
}
</style>
