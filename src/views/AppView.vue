<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '@/components/kit/AppContainer.vue';
import AppHeading from '@/components/kit/AppHeading.vue';
import AppRow from '@/components/kit/AppRow.vue';
import AppButton from '@/components/kit/AppButton.vue';
import AppUploadCard from '@/components/kit/AppUploadCard.vue';
import AppLoader from '@/components/kit/AppLoader.vue';
import { Ref, ref } from 'vue';

const step: Ref<1 | 2 | 3 | 4> = ref(1);

const inputImage: Ref<File | null> = ref(null);
const avatarImage: Ref<File | null> = ref(null);

function startGeneration() {
	step.value++;

	console.log('Изображение входное', inputImage.value);
	console.log('Изображение аватара', avatarImage.value);
}
</script>

<template>
	<AppSection tag="main">
		<AppContainer>
			<!-- Step 1: Input -->
			<template v-if="step === 1">
				<AppHeading
					tag="h2"
					bubble-text="Этап 1/2"
					text="
                        Первым делом тебе нужно загрузить твою фотографию.
                        На основе неё мы уже сгенерируем фотографию в выбранном образе.
                    "
				>
					Загрузи фотографию
				</AppHeading>

				<AppUploadCard v-model:modelValue="inputImage" />

				<AppButton
					v-if="!!inputImage"
					color="dark"
					size="md"
					@click="step++"
				>
					Далее
				</AppButton>
			</template>
			<!-- Step 2: Avatar -->
			<template v-if="step === 2">
				<AppHeading
					tag="h2"
					bubble-text="Этап 2/2"
					text="
                        Теперь тебе остается лишь выбрать человека или же образ,
                        который ты хочешь попробовать на себе.
                    "
				>
					Загрузи или выбери образ
				</AppHeading>

				<AppRow>
					<AppButton color="outline" size="md" @click="step--">
						Назад
					</AppButton>
					<AppButton
						v-if="!!avatarImage"
						color="dark"
						size="md"
						@click="startGeneration"
					>
						Сгенерировать
					</AppButton>
				</AppRow>

				<AppUploadCard v-model:modelValue="avatarImage" />
			</template>
			<!-- Step 3: Generating... -->
			<template v-if="step === 3">
				<AppHeading
					tag="h2"
					text="Генерируем фотографию, подожди немного"
				>
					Происходит магия...
				</AppHeading>

				<AppLoader />
			</template>
		</AppContainer>
	</AppSection>
</template>
