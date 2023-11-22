<script setup lang="ts">
withDefaults(
	defineProps<{
		direction?: 'vertical' | 'horizontal';
		spacing?: 'sm' | 'md' | 'lg';
		adaptive?: boolean;
	}>(),
	{
		direction: 'horizontal',
		spacing: 'md',
		adaptive: false
	}
);
</script>
<template>
	<div
		class="row"
		:data-direction="direction"
		:data-spacing="spacing"
		:data-adaptive="adaptive"
	>
		<slot />
	</div>
</template>

<style scoped lang="scss">
.row {
	display: flex;

	/* Adaptive */
	&[data-adaptive='true'] {
		&[data-spacing='sm'] {
			gap: 12px;

			@media (min-width: 768px) {
				gap: 8px;
			}
		}

		&[data-direction='horizontal'] {
			flex-direction: column;
			align-items: center;

			@media (min-width: 768px) {
				flex-direction: row;
			}
		}
	}

	&[data-direction='vertical'] {
		flex-direction: column;
	}

	&[data-spacing='sm'] {
		gap: 8px;
	}
	&[data-spacing='md'] {
		gap: 12px;
	}
	&[data-spacing='lg'] {
		gap: 20px;
	}
}
</style>
