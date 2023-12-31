<script setup lang="ts">
import UploadIcon from '@/components/icons/UploadIcon.vue';
import { Ref, ref } from 'vue';

const createURL = (file: File) => {
	const binaryData = [file];
	return window.URL.createObjectURL(
		new Blob(binaryData, { type: 'application/zip' })
	);
};

const props = defineProps<{
	modelValue?: File;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', value: File): void;
}>();

const state: Ref<'initial' | 'uploaded'> = ref(
	!props.modelValue ? 'initial' : 'uploaded'
);
const preview: Ref<string> = ref(
	!props.modelValue ? '' : createURL(props.modelValue)
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
	preview.value = createURL(file);
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
			accept=".jpg,.jpeg"
			@change="onUpload"
		/>
		<div class="upload__mask" :data-state="state">
			<template v-if="state === 'initial'">
				<UploadIcon class="upload__mask_icon" />
				<p class="upload__mask_text">Загрузить фото</p>
			</template>
			<template v-else>
				<img
					:src="preview"
					alt="Фото"
					class="upload__mask_preview"
					title="Заменить"
				/>
				<button class="upload__mask_button">Изменить</button>
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
.upload {
	width: 280px;
	height: 280px;

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

		overflow: hidden;

		padding: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='rgb(200,200,200)' stroke-width='3' stroke-dasharray='8%2c 20' stroke-dashoffset='27' stroke-linecap='square'/%3e%3c/svg%3e");

		border-radius: 20px;

		z-index: 50;

		pointer-events: none;

		&[data-state='uploaded'] {
			padding: 0;

			background: transparent;

			border: none;

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
		&_button {
			padding: 10px 18px;

			position: absolute;
			left: 50%;
			bottom: 20px;
			transform: translateX(-50%);

			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(6px);

			color: var(--color-dark-fg);

			font-size: 18px;
			font-weight: 460;

			border-radius: 100px;

			pointer-events: none;
		}
		&_preview {
			width: 100%;
			height: 100%;

			object-fit: cover;
		}
	}
}
</style>
