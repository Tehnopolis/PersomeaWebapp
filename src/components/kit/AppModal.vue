<script setup lang="ts">
import { ref } from 'vue';

const modalRoot = ref();

const hide = function () {
	document.body.removeEventListener('keydown', escapeClose);

	modalRoot.value.classList.add('hide');

	setTimeout(() => {
		modalRoot.value.classList.remove('hide');
		modalRoot.value.classList.remove('show');
		document.body.style.overflow = '';
	}, 450);
};

const escapeClose = function (e: KeyboardEvent) {
	if (e.key === 'Escape') hide();
};

const show = function () {
	modalRoot.value.classList.add('show');
	document.body.style.overflow = 'hidden';
	document.body.addEventListener('keydown', escapeClose);
};

defineExpose({ show, hide });
</script>

<template>
	<div
		ref="modalRoot"
		class="modal"
		tabindex="-1"
		role="dialog"
		@click="hide"
	>
		<div class="modal__window" @click="$event.stopPropagation()">
			<div class="body">
				<slot />
			</div>
			<button class="close" @click="hide">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<style>
body:has(.modal.show) {
	overflow: hidden;
}
</style>

<style lang="scss">
.modal .body .group {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.modal {
	&__title {
		font-size: var(--font-size-h3);
		font-weight: 650;
		font-family: var(--font-family-heading);

		@media (min-width: 768px) {
			font-size: var(--font-size-h3-desktop);
		}
	}

	&__text {
		font-weight: 400;
		font-size: 20px;
		line-height: 22px;
	}
}
</style>

<style scoped lang="scss">
@mixin keyframes($name) {
	@keyframes #{$name} {
		@content;
	}
}

@mixin animate($animation, $duration) {
	animation: $animation $duration;
}

.modal {
	position: fixed;
	inset: 0;
	z-index: var(--modal-z-index);
	display: none;
	justify-content: center;
	align-items: center;
	background: #d9d9d9d9;
	backdrop-filter: blur(8px);

	&.show {
		display: flex;
	}

	&.show &__window {
		@include keyframes(windowPopup) {
			0% {
				transform: scale(0);
			}

			80% {
				transform: scale(1.1);
			}

			100% {
				transform: scale(1);
			}
		}

		@include animate(windowPopup, 0.5s);
	}

	&.hide &__window {
		@include keyframes(windowClose) {
			0% {
				transform: scale(1);
			}

			100% {
				transform: scale(0);
			}
		}

		@include animate(windowClose, 0.5s);
	}

	&__window {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px 0px;
		padding: 10px;
		border-radius: 32px;
		background: #ffffff;
		box-shadow: 0px 34px 75px -10px #00000026;
		width: 95%;
		max-width: 620px;

		@media (min-width: 768px) {
			padding: 10px 70px;
		}

		.close {
			position: absolute;
			top: 28px;
			right: 28px;
			width: 28px;
			height: 28px;
			background: transparent;
			transition: var(--transition);
			cursor: pointer;

			&:active {
				transform: scale(0.8);
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			padding: 40px;
			max-height: calc(100vh - 10rem);
			overflow-y: auto;
			gap: 32px 0px;

			@media (min-width: 768px) {
				padding: 96px 40px;
			}
		}
	}
}
</style>
