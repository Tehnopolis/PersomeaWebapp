<script setup lang="ts">
import AppTag from './AppTag.vue';

defineProps<{
	tag: 'h1' | 'h2' | 'h3' | 'p';
	bubbleText?: string;
	text?: string;
}>();
</script>

<template>
	<div class="heading">
		<AppTag v-if="!!bubbleText" class="heading__tag">
			{{ bubbleText }}
		</AppTag>

		<component :is="tag">
			<slot />
		</component>

		<p v-if="!!text" class="heading__text">
			{{ text }}
		</p>
	</div>
</template>

<style scoped lang="scss">
.heading {
	max-width: 820px;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	&__tag {
		margin-bottom: 20px;

		@media (min-width: 768px) {
			margin-bottom: 40px;
		}
	}
	&__text {
		margin-top: 32px;

		font-size: 18px;
		font-weight: 460;
		line-height: 110%;
		text-align: center;

		@media (min-width: 768px) {
			font-size: 20px;
		}
	}
}

h1,
h2,
h3,
p {
	font-style: normal;
	line-height: 95%;
}

h1 {
	font-size: var(--font-size-h1);
	font-weight: 650;

	@media (min-width: 768px) {
		font-size: var(--font-size-h1-desktop);
	}
}
h2 {
	font-size: var(--font-size-h2);
	font-weight: 500;

	@media (min-width: 768px) {
		font-size: var(--font-size-h2-desktop);
	}
}
h3 {
	font-size: var(--font-size-h3);
	font-weight: 650;

	@media (min-width: 768px) {
		font-size: var(--font-size-h3-desktop);
	}
}
p {
	font-size: 20px;
	font-weight: 510;
	line-height: 110%;
}
</style>
