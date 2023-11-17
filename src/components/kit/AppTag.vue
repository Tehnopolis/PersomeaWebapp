<template>
	<span class="tag">
		<slot />
	</span>
</template>

<style scoped lang="scss">
.tag {
	width: max-content;

	display: inline-block;

	padding: 6px 12px;

	border: 1px solid rgba(14, 14, 14, 0.2);
	border-radius: 150px;

	font-size: 14px;
	font-weight: 460;

	opacity: 90%;
}
</style>
