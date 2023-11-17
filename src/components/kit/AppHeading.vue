<script setup lang="ts">
defineProps<{
	tag: 'h1' | 'h2' | 'h3' | 'p';
}>();
</script>

<template>
	<component :is="tag">
		<slot></slot>
	</component>
</template>

<style scoped lang="scss">
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
