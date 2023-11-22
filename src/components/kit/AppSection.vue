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

	background: var(--color-theme-bg);
	color: var(--color-theme-fg);

	@media (min-width: 768px) {
		padding: 120px 20px;
	}
}

nav.section,
footer.section {
	padding: 20px;
}

main.section,
header.section {
	height: max-content;

	&:deep(.container) {
		align-items: center;
		justify-content: center;
	}
}
main.section {
	/* Fill screen (navbar, footer) */
	min-height: calc(100vh - 67px - 60px);
}
header.section {
	/* Fill screen (navbar, footer) */
	min-height: calc(100vh - 67px);
}
</style>
