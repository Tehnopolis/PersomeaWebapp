<script setup lang="ts">
import InfoIcon from '@/components/icons/InfoIcon.vue';
import ShareIcon from '@/components/icons/ShareIcon.vue';
import DownloadIcon from '@/components/icons/DownloadIcon.vue';
import { shareData } from '../../core/helpers/shareData';

const props = defineProps<{
	image?: string;
	alt: string;
}>();

function sharePreview() {
	if (!props.image) return;

	shareData('Persomea', props.image).then((strategy) => {
		if (strategy === 'clipboard_api') {
			console.log('Copied to clipboard');

			//TODO: show toast or message for user
		}
	});
}
</script>

<template>
	<div
		class="preview"
		:data-state="typeof image === 'string' ? 'success' : 'fail'"
	>
		<template v-if="typeof image === 'string'">
			<img class="preview__image" :src="image" :alt="alt" />

			<div class="preview__buttons">
				<button class="preview__buttons_button" @click="sharePreview">
					<ShareIcon />
					Поделиться
				</button>
				<a
					:href="image"
					download="persomea_generated.jpg"
					target="_blank"
					rel="noopener noreferrer"
					class="preview__buttons_button"
				>
					<DownloadIcon />
					Скачать
				</a>
			</div>
		</template>
		<template v-else>
			<div class="preview__alert">
				<InfoIcon class="preview__alert_icon" />
				<p class="preview__alert_text">
					Не удалось загрузить изображение
				</p>
			</div>
		</template>
	</div>
</template>

<style scoped lang="scss">
.preview {
	width: 300px;
	height: 300px;

	padding: 16px;

	display: flex;

	position: relative;

	border-radius: 20px;

	&[data-state='fail'] {
		background-color: var(--color-base-box);
	}

	&__alert {
		margin: auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;

		&_icon,
		&_text {
			color: var(--color-danger-bg2);
		}

		&_text {
			font-size: 18px;
			font-weight: 460;
			text-align: center;
		}
	}

	&__image {
		width: 100%;
		height: 100%;

		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		border-radius: 20px;

		object-fit: cover;

		background-color: var(--color-base-box);
	}

	&__buttons {
		display: flex;
		flex-direction: column;
		gap: 8px;

		position: absolute;
		left: 20px;
		bottom: 20px;

		&_button {
			width: max-content;

			padding: 6px 12px;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;

			border-radius: 100px;

			cursor: pointer;

			background-color: rgba(0, 0, 0, 0.4);
			backdrop-filter: blur(8px);

			border: none;

			color: white;
			font-size: 18px;
			font-weight: 460;

			& > img,
			& > svg {
				width: 24px;
				height: 24px;
			}
		}
	}
}
</style>
