<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '@/components/kit/AppContainer.vue';
import AppButton from '@/components/kit/AppButton.vue';
import AppHeading from '@/components/kit/AppHeading.vue';
import AppModal from '../components/kit/AppModal.vue';
import {
	Panel,
	Configuration as PanelConfiguration
} from '../components/panel';
import { ref } from 'vue';

let modal = ref();

const prosPanels: PanelConfiguration[] = [
	{
		title: 'Выбери любой образ',
		mode: 'white',
		icon: 'happy-face',
		description:
			'Загрузи образ и себя, а мы дадим тебе уже фотографию в образе.'
	},
	{
		title: 'Результат за минуту',
		mode: 'white',
		icon: 'star',
		description:
			'Фотография сгенерируется очень быстро, вам не придется ждать часами.'
	},
	{
		title: 'Полностью бесплатно',
		mode: 'white',
		icon: 'coins',
		description: 'Да! Вы потратите ни единой копейки, все будет бесплатно.'
	}
];

const aboutPanels: PanelConfiguration[] = [
	{
		title: 'Загрузи себя',
		mode: 'dark',
		icon: 'number-one',
		description:
			'Загрузи любую свою фотографию, в конце ты получишь её, но с образом'
	},
	{
		title: 'Загрузи образ',
		mode: 'dark',
		icon: 'number-two',
		description: 'Загрузи любую фотографию, в кого ты бы хотел превратиться'
	},
	{
		title: 'Получи результат!',
		mode: 'dark',
		icon: 'number-three',
		description:
			'Готово! Спустя 1-2 минуты ты получишь сгенерированную фотку.'
	}
];

const factsPanels: PanelConfiguration[] = [
	{
		title: 'Не храним фото',
		mode: 'white',
		icon: 'lock',
		description:
			'Даже если ты загрузишь свои забавные фото – они никуда не попадут, мы попросту не храним загруженные фото.'
	},
	{
		title: 'Без регистрации и смс',
		mode: 'white',
		icon: 'heart',
		description:
			'Тебе не нужно предоставлять свою электропочту или же номер телефона - сервис работает без регистрации.'
	}
];

const scrollTo = function (id: string) {
	document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
	<AppModal ref="modal">
		<div class="group">
			<p class="modal__title">Очень жаль!</p>
			<p class="modal__text">
				Мы ведь старались... Может все-таки передумаешь? Вот тебе ещё
				несколько фактов о Persomea:
			</p>
		</div>
		<div class="group">
			<Panel
				v-for="(panel, index) in factsPanels"
				:key="index"
				:config="panel"
				style="max-width: 400px"
			/>
		</div>
	</AppModal>
	<AppSection tag="main">
		<AppContainer style="gap: 0px">
			<div class="main-section">
				<AppHeading
					:size="1"
					text="
					Интерактивный сервис, где ты можешь на себе примерить любую личность или 
					персонажа – просто загрузи фотки и получи результат на почту.
				"
				>
					Попробуй на себе аватары от ИИ
				</AppHeading>
				<div class="button-group">
					<AppButton
						size="md"
						color="secondary"
						class="try-btn"
						@click="scrollTo('try')"
					>
						Попробовать
					</AppButton>
					<AppButton
						size="md"
						color="outline"
						@click="scrollTo('about')"
					>
						Как это работает?
					</AppButton>
				</div>
			</div>
			<div class="panel-container">
				<Panel
					v-for="(panel, index) in prosPanels"
					:key="index"
					:config="panel"
				/>
			</div>
		</AppContainer>
	</AppSection>
	<AppSection id="about" tag="section" class="dark-section">
		<div style="padding: 32px 0px">
			<AppHeading
				:size="2"
				text="Давайте расскажем как вообще это работает"
			>
				Как это работает?
			</AppHeading>
		</div>
		<div class="panel-container">
			<Panel
				v-for="(panel, index) in aboutPanels"
				:key="index"
				:config="panel"
			/>
		</div>
	</AppSection>
	<AppSection id="try" tag="section" class="try-section">
		<div class="card">
			<div style="display: flex; flex-direction: column; gap: 8px">
				<p class="title">Уже можно попробовать!</p>
				<p class="question">Попробуем?</p>
			</div>
			<div class="button-group">
				<div class="button-group">
					<RouterLink to="/app">
						<AppButton size="md" color="secondary"> Да </AppButton>
					</RouterLink>
					<AppButton size="md" color="outline" @click="modal.show()">
						Нет
					</AppButton>
				</div>
			</div>
		</div>
	</AppSection>
</template>

<style scoped lang="scss">
.button-group {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 8px;
}

.panel-container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px 0px;
	padding: 20px 0px;
	width: 100%;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0px 8px;
	}
}

.main-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0px;
	gap: 32px;

	@media (min-width: 768px) {
		padding: 40px;
	}

	.try-btn {
		background: var(--color-dark-bg);
		color: var(--color-dark-fg);

		&:hover {
			background: var(--color-dark-hover-bg);
		}

		@media (min-width: 768px) {
			background: var(--color-secondary-bg);
			color: var(--color-secondary-fg);

			&:hover {
				background: var(--color-secondary-hover-bg);
			}
		}
	}
}

.dark-section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #1a1a1a;
	padding: 40px 20px;

	* {
		color: #ffffff;
	}

	@media (min-width: 768px) {
		padding: 60px 0px;
	}

	.panel-container {
		@media (min-width: 768px) {
			padding-left: 15px;
			padding-right: 15px;
		}
	}
}

.try-section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px 20px;

	@media (min-width: 768px) {
		padding: 60px 0px;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0px;
		background: #eeeff1;
		border-radius: 24px;
		text-align: center;
		width: 100%;
		gap: 40px 0px;

		@media (min-width: 768px) {
			padding: 40px 120px;
			width: 95%;
			max-width: 980px;
		}

		.title,
		.question {
			font-size: var(--font-size-h2);
			font-weight: 500;
			font-family: var(--font-family-heading);
			max-width: max-content;
			margin: 0px auto;

			@media (min-width: 768px) {
				font-size: var(--font-size-h2-desktop);
			}
		}

		.question {
			color: #6a63f3;
			background: #6a63f326;
			border-radius: 8px;
			padding: 4px 8px;
		}
	}
}
</style>
