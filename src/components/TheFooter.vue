<script setup lang="ts">
import AppSection from './kit/AppSection.vue';
import AppContainer from './kit/AppContainer.vue';
</script>

<template>
	<AppSection tag="footer" class="footer">
		<AppContainer>
			<small class="footer__text">
				© 2023 Persomea. Все права защищены.
			</small>
		</AppContainer>
	</AppSection>
</template>

<style scoped lang="scss">
.footer {
	margin-top: auto;

	border-top: 1px solid rgba(14, 14, 14, 0.2);

	&__text {
		font-size: 14px;
		font-weight: 460;

		color: var(--color-base-fg3);
	}
}
</style>
