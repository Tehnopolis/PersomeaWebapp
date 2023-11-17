<script setup lang="ts">
import AppSection from '@/components/kit/AppSection.vue';
import AppContainer from '../components/kit/AppContainer.vue';
import AppButton from '../components/kit/AppButton.vue';
</script>

<template>
	<AppSection tag="main">
		<AppContainer>
			<RouterLink to="/app">
				<AppButton size="md" color="primary"> Перейти </AppButton>
			</RouterLink>
		</AppContainer>
	</AppSection>
</template>
