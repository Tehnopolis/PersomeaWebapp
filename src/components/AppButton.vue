<script setup lang="ts">
interface AppButtonProps {
	type: 'button' | 'submit' | 'reset';
	color: 'dark' | 'outline' | 'primary' | 'secondary';
	size: 'l' | 'm';
}

defineProps<AppButtonProps>();

const emit = defineEmits(['click']);

const emitClick = () => emit('click');
</script>

<template>
	<button
		:class="['button', `color-${color}`, `size-${size}`]"
		:type="type"
		@click="emitClick"
	>
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	padding: 10px 18px;
	cursor: pointer;
	border-radius: 50px;
	opacity: 90%;
	transition:
		background-color 400ms ease,
		border-color 400ms ease,
		color 400ms ease;
	position: relative;
	text-decoration: none;
	border: none;
	outline: none;
	font-style: normal;
	font-weight: 510;
	line-height: 105%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	&.size-m {
		font-size: var(--font-size-medium-button);
	}

	&.size-l {
		font-size: var(--font-size-large-button);
	}

	&.color-dark {
		background: var(--color-dark-bg);
		color: var(--color-dark-fg);

		&:hover {
			background: var(--color-dark-hover-bg);
		}
	}
	&.color-outline {
		border: 1px solid var(--color-light-border);
		padding: 9px 18px !important;
		background: var(--color-light-bg);
		color: var(--color-light-fg);

		&:hover {
			border: 1px solid var(--color-light-hover-border);
		}
	}
	&.color-primary {
		background: var(--color-primary-bg);
		color: var(--color-primary-fg);

		&:hover {
			background: var(--color-primary-hover-bg);
		}
	}
	&.color-secondary {
		background: var(--color-secondary-bg);
		color: var(--color-secondary-fg);

		&:hover {
			background: var(--color-secondary-hover-bg);
		}
	}
}
</style>
