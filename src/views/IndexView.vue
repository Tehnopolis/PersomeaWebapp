<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppHeading from '@/components/AppHeading.vue';
</script>

<template>
	<section>
		<AppHeading tag="h1">Heading / H1</AppHeading>
		<AppHeading tag="h2">Heading / H2</AppHeading>
		<AppHeading tag="h3">Heading / H3</AppHeading>
		<AppHeading tag="p">Text</AppHeading>
		<AppButton
			type="button"
			color="dark"
			size="m"
			@click="console.log('Button clicked!')"
		>
			Button / Dark</AppButton
		>
		<AppButton
			type="button"
			color="outline"
			size="m"
			@click="console.log('Button clicked!')"
		>
			Button / Outline</AppButton
		>
		<AppButton
			type="button"
			color="primary"
			size="m"
			@click="console.log('Button clicked!')"
		>
			Button / Primary</AppButton
		>
		<AppButton
			type="button"
			color="secondary"
			size="m"
			@click="console.log('Button clicked!')"
		>
			Button / Secondary</AppButton
		>
		<AppButton
			type="button"
			color="dark"
			size="l"
			@click="console.log('Button clicked!')"
		>
			Button / Large</AppButton
		>
	</section>
</template>

<style scoped>
section {
	margin: 30px;

	* {
		margin-bottom: 20px;
		text-align: left;
	}
}
</style>
