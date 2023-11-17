<script setup lang="ts">
import { computed } from 'vue';
interface AppInputProps {
	label: string;
	placeholder?: string;
	rightIcon?: string;
	modelValue: string;
	isValid?: string;
}

const props = withDefaults(defineProps<AppInputProps>(), {
	isValid: undefined,
	rightIcon: undefined,
	placeholder: undefined
});

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
	<div :class="['app-input', isValidClass]" :data-is-icon="!!rightIcon">
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
			@click="emit('btn-click')"
		/>
	</div>
</template>

<style scoped lang="scss">
.app-input {
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 280px;
	position: relative;
}

.app-input__label {
	color: var(--color-input-label);
	font-size: var(--font-size-label);
}

.app-input[data-is-icon='true'] .app-input__field {
	padding-right: 40px;
}

.app-input--valid .app-input__label {
	color: rgba(137, 199, 75, 0.5);
}

.app-input--valid .app-input__field {
	border: 1px solid rgba(137, 199, 75, 0.85);
}

.app-input--invalid .app-input__label {
	color: rgba(255, 89, 89, 0.5);
}

.app-input--invalid .app-input__field {
	border: 1px solid rgba(255, 37, 37, 0.85);
}

.app-input__field {
	padding: 11px 20px;
	border: 1px solid var(--color-input-border);
	opacity: 0.9;
	border-radius: 8px;
	color: var(--color-base-fg);
	font-size: 18px;
	font-style: normal;
	font-weight: 510;
	line-height: 105%;

	&::placeholder {
		color: var(--color-input-placeholder);
		font-size: var(--font-size-field);
		font-style: normal;
		font-weight: 510;
		line-height: 105%;
	}

	&:focus {
		border: 1px solid #2b68de;
		box-shadow: 0px 0px 0px 3px rgba(43, 104, 222, 0.15);
	}
}

.app-input__icon {
	position: absolute;
	right: 20px;
	bottom: 21.45px;
	cursor: pointer;
	transform: translateY(50%);
}
</style>
