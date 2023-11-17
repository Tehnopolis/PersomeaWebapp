<script setup lang="ts">
withDefaults(
	defineProps<{
		type?: 'button' | 'submit' | 'reset';
		color: 'dark' | 'outline' | 'primary' | 'secondary';
		size: 'md' | 'lg';
	}>(),
	{
		type: 'button'
	}
);

defineEmits<{
	(event: 'click'): void;
}>();
</script>

<template>
	<button
		:class="['button', `button--color-${color}`, `button--size-${size}`]"
		:type="type"
		@click="$emit('click')"
	>
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	padding: 10px 18px;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	opacity: 90%;

	border: none;
	border-radius: 50px;
	outline: none;

	text-decoration: none;
	font-style: normal;
	font-weight: 510;
	line-height: 105%;

	cursor: pointer;
	transition: var(--transition);
	transition-property: background, border, color;

	&--size-md {
		font-size: var(--font-size-medium-button);
	}
	&--size-lg {
		font-size: var(--font-size-large-button);
	}

	&--color-dark {
		background: var(--color-dark-bg);
		color: var(--color-dark-fg);

		&:hover {
			background: var(--color-dark-hover-bg);
		}
	}
	&--color-outline {
		border: 1px solid var(--color-light-border);
		padding: 9px 18px;
		background: var(--color-light-bg);
		color: var(--color-light-fg);

		&:hover {
			border: 1px solid var(--color-light-hover-border);
		}
	}
	&--color-primary {
		background: var(--color-primary-bg);
		color: var(--color-primary-fg);

		&:hover {
			background: var(--color-primary-hover-bg);
		}
	}
	&--color-secondary {
		background: var(--color-secondary-bg);
		color: var(--color-secondary-fg);

		&:hover {
			background: var(--color-secondary-hover-bg);
		}
	}
}
</style>
