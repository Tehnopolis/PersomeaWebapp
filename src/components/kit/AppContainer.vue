<template>
	<div class="container">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.container {
	width: 100%;
	max-width: 980px;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 40px; /* Its not working on old Safari... */
}
</style>
