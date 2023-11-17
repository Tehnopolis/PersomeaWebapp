<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '../components/kit/AppContainer.vue';
import AppHeading from '../components/kit/AppHeading.vue';
import { Ref, ref } from 'vue';

const step: Ref<1 | 2> = ref(1);
</script>

<template>
	<AppSection tag="main">
		<AppContainer>
			<AppHeading
				tag="h1"
				:bubble-text="`Этап ${step}/2`"
				text="
				Первым делом тебе нужно загрузить твою фотографию.
				На основе неё мы уже сгенерируем фотографию в выбранном образе.
				"
			>
				Загрузи фотографию
			</AppHeading>
		</AppContainer>
	</AppSection>
</template>
