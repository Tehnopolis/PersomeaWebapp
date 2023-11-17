<script setup lang="ts">
import AppSection from './kit/AppSection.vue';
import AppContainer from './kit/AppContainer.vue';
</script>

<template>
	<AppSection tag="nav" class="navbar">
		<AppContainer>
			<img src="/logo.svg" alt="Persomea" />
		</AppContainer>
	</AppSection>
</template>

<style scoped lang="scss">
.navbar {
	&:deep(.container) {
		align-items: center;
		justify-content: center;
	}
}
</style>
