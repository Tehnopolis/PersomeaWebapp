<script setup lang="ts">
withDefaults(
	defineProps<{
		tag?: 'section' | 'article' | 'header' | 'nav' | 'footer';
	}>(),
	{
		tag: 'section'
	}
);
</script>

<template>
	<component :is="tag" class="section">
		<slot />
	</component>
</template>

<style scoped lang="scss">
.section {
	height: max-content;

	padding: 60px 20px;

	display: flex;

	@media (min-width: 768px) {
		padding: 40px 20px;
	}
}
</style>
