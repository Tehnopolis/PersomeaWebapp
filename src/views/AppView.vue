<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '@/components/kit/AppContainer.vue';
import AppHeading from '@/components/kit/AppHeading.vue';
import AppRow from '@/components/kit/AppRow.vue';
import AppButton from '@/components/kit/AppButton.vue';
import AppUploadImage from '@/components/kit/AppUploadImage.vue';
import AppPreviewImage from '@/components/kit/AppPreviewImage.vue';
import AppLoader from '@/components/kit/AppLoader.vue';
import { Ref, ref } from 'vue';
import { generateAvatar } from '../core/requests/generateAvatar';

const step: Ref<1 | 2 | 3 | 4> = ref(1);

const inputImage: Ref<File | null> = ref(null);
const avatarImage: Ref<File | null> = ref(null);
const outputImage: Ref<string | null> = ref(null);

async function startGeneration() {
	if (!inputImage.value || !avatarImage.value) return;

	// Switch to loading step
	step.value++;

	// Get generated output
	const result = await generateAvatar({
		input: inputImage.value,
		avatar: avatarImage.value
	});

	// Switch to finished step
	step.value++;
	outputImage.value = result.result_url;

	console.log('Output image', outputImage.value);
}
</script>

<template>
	<AppSection tag="main">
		<AppContainer>
			<!-- Step 1: Input -->
			<template v-if="step === 1">
				<AppHeading
					:size="2"
					tag="Этап 1/2"
					text="
                        Первым делом тебе нужно загрузить твою фотографию.
                        На основе неё мы уже сгенерируем фотографию в выбранном образе.
                    "
				>
					Загрузи фотографию
				</AppHeading>

				<AppButton
					v-if="!!inputImage"
					color="dark"
					size="md"
					@click="step++"
				>
					Далее
				</AppButton>

				<AppUploadImage v-model:modelValue="inputImage" />
			</template>
			<!-- Step 2: Avatar -->
			<template v-if="step === 2">
				<AppHeading
					:size="2"
					tag="Этап 2/2"
					text="
                        Теперь тебе остается лишь выбрать человека или же образ,
                        который ты хочешь попробовать на себе.
                    "
				>
					Загрузи или выбери образ
				</AppHeading>

				<AppRow>
					<AppButton color="dark" size="md" @click="step--">
						Назад
					</AppButton>
					<AppButton
						v-if="!!avatarImage"
						color="primary"
						size="md"
						@click="startGeneration"
					>
						Сгенерировать
					</AppButton>
				</AppRow>

				<AppUploadImage v-model:modelValue="avatarImage" />
			</template>
			<!-- Step 3: Generating... -->
			<template v-if="step === 3">
				<AppHeading
					:size="2"
					text="Генерируем фотографию, подожди немного"
				>
					Происходит магия...
				</AppHeading>

				<AppLoader />
			</template>
			<!-- Step 4: Generated! -->
			<template v-if="step === 4">
				<AppHeading
					:size="2"
					text="Теперь ты можешь поделиться результатом или скачать его."
				>
					Готово!
				</AppHeading>

				<AppPreviewImage :image="outputImage" alt="Результат" />
			</template>
		</AppContainer>
	</AppSection>
</template>
../core/requests/generateAvatar
