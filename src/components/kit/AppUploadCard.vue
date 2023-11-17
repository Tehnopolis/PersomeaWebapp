<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps<{
	modelValue?: File;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', value: File): void;
}>();

const state: Ref<'initial' | 'uploaded'> = ref(
	props.modelValue ? 'uploaded' : 'initial'
);
const preview: Ref<string> = ref(
	props.modelValue ? URL.createObjectURL(props.modelValue) : ''
);

function onUpload(e: Event) {
	if (
		!e.target ||
		!(e.target instanceof HTMLInputElement) ||
		!e.target.files
	) {
		return;
	}

	const file = e.target.files[0] as File;

	// Load preview
	preview.value = URL.createObjectURL(file);
	state.value = 'uploaded';

	// Emit event
	emit('update:modelValue', file);
}
</script>

<template>
	<div class="upload">
		<input
			class="upload__field"
			type="file"
			accept=".jpg,.png,.jpeg,.bmp,.tif,.tiff|image/*"
			@change="onUpload"
		/>
		<div class="upload__mask" :data-state="state">
			<template v-if="state === 'initial'">
				<img
					src="/icons/Upload.svg"
					alt="Загрузить"
					class="upload__mask_icon"
				/>
				<p class="upload__mask_text">Загрузить фото</p>
			</template>
			<template v-else>
				<img
					:src="preview"
					alt="Фото"
					class="upload__mask_preview"
					title="Заменить"
				/>
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
.upload {
	width: 320px;
	height: 320px;

	position: relative;

	&__field {
		width: 100%;
		height: 100%;

		z-index: 25;

		border: none;
		outline: none;

		appearance: none;

		opacity: 0;

		cursor: pointer;
	}
	&__mask {
		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		padding: 20px;

		display: flex;
		align-items: center;
		justify-content: center;

		background: var(--color-base-bg);

		border: 2px dashed rgba(14, 14, 14, 0.2);
		border-radius: 20px;

		z-index: 50;

		pointer-events: none;

		&[data-state='uploaded'] {
			padding: 0;

			border: 2px solid rgba(14, 14, 14, 0.2);

			box-shadow: 0px 34px 54px -10px rgba(0, 0, 0, 0.1);

			& > .upload__mask_icon {
				display: none;

				color: white;
			}
		}

		&_icon {
			width: 32px;
			height: 32px;

			margin-right: 20px;
		}
		&_text {
			font-size: 20px;
			font-weight: 460;
		}
		&_preview {
			width: 100%;
			height: 100%;

			object-fit: cover;

			border-radius: 20px;
		}
	}
}
</style>
