<script setup lang="ts">
import { Configuration } from '.';

import AppIconBox from '@/components/kit/AppIconBox.vue';

defineProps<{
	config: Configuration;
}>();
</script>

<template>
	<div :class="`panel${config.mode == 'dark' ? ' dark' : ''}`">
		<AppIconBox :mode="config.mode" :icon="config.icon" />
		<p class="panel__title">{{ config.title }}</p>
		<p class="panel__description">{{ config.description }}</p>
	</div>
</template>

<style scoped lang="scss">
.panel {
	display: flex;
	flex-direction: column;
	gap: 16px 0px;
	max-width: 321px;

	&__title {
		font-size: 20px;
		line-height: 20px;
		font-weight: 500;
		font-family: var(--font-family-heading);
		color: #121212;
	}

	&__description {
		font-size: 16px;
		line-height: 17.97px;
		font-weight: 400;
		font-family: var(--font-family-base);
		color: #7b7b81;
		white-space: pre-wrap;
	}

	&.dark * {
		color: #ffffff;
	}

	&.dark &__description {
		color: #9e9e9e;
	}
}
</style>
