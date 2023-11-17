<script setup lang="ts">
withDefaults(
	defineProps<{
		tag?: 'section' | 'article' | 'header' | 'nav' | 'footer' | 'main';
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

nav.section,
footer.section {
	padding: 20px;
}

main.section {
	/* Fill screen (navbar, footer) */
	min-height: calc(100vh - 67px - 60px);
	height: max-content;

	&:deep(.container) {
		align-items: center;
		justify-content: center;
	}
}
</style>
