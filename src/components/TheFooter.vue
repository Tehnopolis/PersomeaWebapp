<script setup lang="ts">
import AppSection from './kit/AppSection.vue';
import AppContainer from './kit/AppContainer.vue';
</script>

<template>
	<AppSection tag="footer" class="footer">
		<AppContainer>
			<small class="footer__text">
				© 2023 Persomea. All rights reserved
			</small>
		</AppContainer>
	</AppSection>
</template>

<style scoped lang="scss">
.footer {
	padding: 20px;

	margin-top: auto;

	border-top: 1px solid rgba(14, 14, 14, 0.2);

	&__text {
		font-weight: 460;
		color: var(--color-base-fg2);
	}
}
</style>
