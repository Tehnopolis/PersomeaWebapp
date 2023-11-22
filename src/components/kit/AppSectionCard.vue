<template>
	<div class="section-card">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.section-card {
	width: 100%;

	padding: 40px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px 0px;

	background: #eeeff1;

	text-align: center;

	border-radius: 24px;

	@media (min-width: 768px) {
		padding: 40px 120px;
	}
}
</style>
