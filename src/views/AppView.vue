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
	if (!inputImage.value || !avatarImage.value) return;

	step.value++;

	/* TODO: we should not send request here... */
	const body = new FormData();
	body.append('src', inputImage.value);
	body.append('dst', avatarImage.value);
	fetch('http://188.246.224.82:8876/api/avatars/simple_swap', {
		body
	})
		.then((resp) => resp.json())
		.then((data) => {
			console.log('Got response', data);
		});
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
