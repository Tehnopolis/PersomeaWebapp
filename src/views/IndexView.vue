<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '@/components/kit/AppContainer.vue';
import AppButton from '@/components/kit/AppButton.vue';
import AppRow from '../components/kit/AppRow.vue';
import AppHeading from '@/components/kit/AppHeading.vue';
import AppModal from '../components/kit/AppModal.vue';
import AppCard from '../components/kit/AppCard.vue';
import AppSectionCard from '../components/kit/AppSectionCard.vue';
import { ref } from 'vue';

const modal = ref();

function scrollTo(id: string) {
	document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
	<AppSection tag="header">
		<AppContainer>
			<div class="cta">
				<AppHeading
					:size="1"
					text="
						Интерактивный сервис, где ты можешь на себе примерить любую личность или 
						персонажа – просто загрузи фотки и получи результат на почту.
					"
				>
					Попробуй на себе аватары от ИИ
				</AppHeading>
				<AppRow spacing="sm" :adaptive="true">
					<RouterLink to="/app">
						<AppButton size="md" color="secondary">
							Попробовать
						</AppButton>
					</RouterLink>

					<AppButton
						size="md"
						color="outline"
						@click="scrollTo('how-works')"
					>
						Как это работает?
					</AppButton>
				</AppRow>
			</div>
			<AppRow spacing="sm" :adaptive="true">
				<AppCard
					icon="/icons/MaskHappy.svg"
					title="Выбери любой образ"
					description="Загрузи образ и себя, а мы дадим тебе уже фотографию в образе."
				/>
				<AppCard
					icon="/icons/Star.svg"
					title="Результат за минуту"
					description="Фотография сгенерируется очень быстро, вам не придется ждать часами."
				/>
				<AppCard
					icon="/icons/Coins.svg"
					title="Полностью бесплатно"
					description="Да! Вы потратите ни единой копейки, все будет бесплатно."
				/>
			</AppRow>
		</AppContainer>
	</AppSection>
	<AppSection id="how-works" tag="section" data-theme="dark">
		<AppContainer>
			<AppHeading
				:size="2"
				text="Давайте расскажем как вообще это работает"
			>
				Как это работает?
			</AppHeading>

			<AppRow spacing="sm" :adaptive="true">
				<AppCard
					icon="/icons/NumberOne.svg"
					title="Загрузи себя"
					description="Загрузи любую свою фотографию, в конце ты получишь её, но с образом"
				/>
				<AppCard
					icon="/icons/NumberTwo.svg"
					title="Загрузи образ"
					description="Загрузи любую фотографию, в кого ты бы хотел превратиться"
				/>
				<AppCard
					icon="/icons/NumberThree.svg"
					title="Получи результат!"
					description="Готово! Спустя 1-2 минуты ты получишь сгенерированную фотку."
				/>
			</AppRow>
		</AppContainer>
	</AppSection>
	<AppSection id="try" tag="section" class="try-section">
		<AppContainer>
			<AppSectionCard>
				<AppHeading :size="2">
					Уже можно попробовать
					<span>Попробуем?</span>
				</AppHeading>
				<AppRow spacing="sm">
					<RouterLink to="/app">
						<AppButton size="md" color="secondary"> Да </AppButton>
					</RouterLink>
					<AppButton size="md" color="outline" @click="modal.show()">
						Нет
					</AppButton>
				</AppRow>
			</AppSectionCard>
		</AppContainer>
	</AppSection>

	<AppModal
		ref="modal"
		title="Очень жаль!"
		text="
			Мы ведь старались... Может все-таки передумаешь? Вот тебе ещё
			несколько фактов о Persomea:
		"
	>
		<AppRow direction="vertical">
			<AppCard
				icon="/icons/Lock.svg"
				title="Не храним фото"
				description="Даже если ты загрузишь свои забавные фото – они никуда не попадут, мы попросту не храним загруженные фото."
			/>
			<AppCard
				icon="/icons/Heart.svg"
				title="Без регистрации и смс"
				description="Тебе не нужно предоставлять свою электропочту или же номер телефона - сервис работает без регистрации."
			/>
		</AppRow>
	</AppModal>
</template>

<style scoped lang="scss">
.cta {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0px;
	gap: 32px;

	@media (min-width: 768px) {
		padding: 40px;
	}
}
</style>
