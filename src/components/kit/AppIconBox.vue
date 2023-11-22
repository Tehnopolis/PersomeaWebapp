<script setup lang="ts">
import happyFace from '@/assets/icon-box/happy.svg';
import star from '@/assets/icon-box/star.svg';
import coins from '@/assets/icon-box/coins.svg';
import numberOne from '@/assets/icon-box/one.svg';
import numberTwo from '@/assets/icon-box/two.svg';
import numberThree from '@/assets/icon-box/three.svg';
import lock from '@/assets/icon-box/lock.svg';
import heart from '@/assets/icon-box/heart.svg';

withDefaults(
	defineProps<{
		mode: 'white' | 'dark';
		icon?:
			| 'happy-face'
			| 'star'
			| 'coins'
			| 'number-one'
			| 'number-two'
			| 'number-three'
			| 'lock'
			| 'heart';
	}>(),
	{
		mode: 'white',
		icon: undefined
	}
);

const icons: Record<string, string> = {
	'happy-face': happyFace,
	star: star,
	coins: coins,
	'number-one': numberOne,
	'number-two': numberTwo,
	'number-three': numberThree,
	lock: lock,
	heart: heart
};
</script>

<template>
	<div :class="`icon-box${mode == 'dark' ? ' dark' : ''}`">
		<template v-if="icon">
			<svg width="24" height="24">
				<use width="24" height="24" :href="`${icons[icon]}#img`"></use>
			</svg>
		</template>
	</div>
</template>

<style scoped lang="scss">
.icon-box {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 49px;
	height: 49px;
	padding: 4px 8px;
	border-radius: 10px;
	opacity: 0.9;
	background: #eeeff1;

	&.dark {
		background: #272727;
		color: #ffffff;
	}
}
</style>
