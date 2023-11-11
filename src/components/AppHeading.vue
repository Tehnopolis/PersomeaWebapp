<script setup lang="ts">
interface AppHeadingProps {
	tag: 'h1' | 'h2' | 'h3' | 'p';
}

defineProps<AppHeadingProps>();
</script>

<template>
	<component :is="tag">
		<slot></slot>
	</component>
</template>

<style scoped>
h1,
h2,
h3,
p {
	font-style: normal;
	line-height: 95%;
}
h1 {
	font-size: var(--font-size-h1-desktop);
	font-weight: 650;
}
h2 {
	font-size: var(--font-size-h2-desktop);
	font-weight: 500;
}
h3 {
	font-size: var(--font-size-h3-desktop);
	font-weight: 650;
}
p {
	font-size: 20px;
	font-weight: 510;
	line-height: 110%;
}

@media (max-width: 428px) {
	h1 {
		font-size: var(--font-size-h1);
	}
	h2 {
		font-size: var(--font-size-h2);
	}
	h3 {
		font-size: var(--font-size-h3);
	}
}
</style>
