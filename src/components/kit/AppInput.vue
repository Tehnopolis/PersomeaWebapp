<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		modelValue: string;

		label: string;
		placeholder: string;

		rightIcon?: string;
		isValid?: string;
	}>(),
	{
		rightIcon: undefined,
		isValid: undefined
	}
);

const isValidClass = computed(() => {
	if (props.isValid === undefined) return '';
	return props.isValid ? 'app-input--valid' : 'app-input--invalid';
});

const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void;
	(event: 'btn-click'): void;
}>();

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
};
</script>

<template>
	<div :class="['app-input', isValidClass]" :data-with-icon="!!rightIcon">
		<p class="app-input__label">{{ label }}</p>

		<input
			type="text"
			class="app-input__field"
			:placeholder="placeholder"
			:value="modelValue"
			@input="updateValue"
		/>

		<img
			v-if="rightIcon"
			:src="rightIcon"
			alt="icon"
			class="app-input__icon"
			@click="$emit('btn-click')"
		/>
	</div>
</template>

<style scoped lang="scss">
.app-input {
	max-width: 280px;

	display: flex;
	flex-direction: column;
	gap: 8px;

	position: relative;

	&__label {
		color: var(--color-input-label);
		font-size: var(--font-size-label);
	}
	&__field {
		padding: 12px 16px;

		opacity: 90%;

		border: 1px solid var(--color-input-border);
		border-radius: 8px;

		color: var(--color-base-fg);

		font-size: 18px;
		font-weight: 510;
		line-height: 105%;

		transition: var(--transition);
		transition-property: border, box-shadow;

		&::placeholder {
			color: var(--color-input-placeholder);

			font-size: var(--font-size-field);
			font-weight: 510;
			line-height: 105%;
		}

		&:focus {
			border: 1px solid #2b68de;
			box-shadow: 0px 0px 0px 3px rgba(43, 104, 222, 0.15);
		}
	}
	&__icon {
		position: absolute;
		top: calc(
			50% + 2px
		); /* Used hack because icon is inside container with label + input */
		right: 20px;
		bottom: 20px;

		cursor: pointer;
	}

	/* With icon */
	&[data-with-icon='true'] &__field {
		padding-right: 40px;
	}

	/* Validation */
	&--valid &__label {
		color: rgba(137, 199, 75, 0.5);
	}
	&--valid &__field {
		border: 1px solid rgba(137, 199, 75, 0.85);
	}

	&--invalid &__label {
		color: rgba(255, 89, 89, 0.5);
	}
	&--invalid &__field {
		border: 1px solid rgba(255, 37, 37, 0.85);
	}
}
</style>
