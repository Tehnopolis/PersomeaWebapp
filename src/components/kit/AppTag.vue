<template>
	<span class="tag">
		<slot />
	</span>
</template>

<style scoped lang="scss">
.tag {
	width: max-content;

	display: inline-block;

	padding: 10px 18px;

	border: 1px solid rgba(14, 14, 14, 0.2);
	border-radius: 150px;

	font-size: 16px;
	font-weight: 460;
}
</style>
