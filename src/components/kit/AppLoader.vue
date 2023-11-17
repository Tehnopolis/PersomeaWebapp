<template>
	<div class="loader">
		<div class="loader-circle"></div>
		<div class="loader-line-mask">
			<div class="loader-line"></div>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="38"
			height="38"
			viewBox="0 0 25 25"
			fill="none"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M11.477 1.94243C11.7283 1.7676 12.0272 1.67389 12.3334 1.67389C12.6396 1.67389 12.9385 1.7676 13.1899 1.94243C13.4413 2.11727 13.6331 2.36485 13.7397 2.65191L13.7414 2.65659L15.9153 8.63485V8.63485L15.9175 8.63823L15.9197 8.63991L15.9205 8.64028V8.64028L21.9038 10.816C22.1909 10.9226 22.4384 11.1144 22.6133 11.3658C22.7881 11.6172 22.8818 11.9161 22.8818 12.2223C22.8818 12.5285 22.7881 12.8273 22.6133 13.0787C22.4384 13.3301 22.1909 13.522 21.9038 13.6285L21.8991 13.6303L15.9208 15.8041V15.8041L15.9175 15.8063L15.9154 15.8094V15.8094L13.7397 21.7926C13.6331 22.0797 13.4413 22.3273 13.1899 22.5021C12.9385 22.6769 12.6396 22.7707 12.3334 22.7707C12.0272 22.7707 11.7283 22.6769 11.477 22.5021C11.2256 22.3273 11.0337 22.0797 10.9272 21.7926L10.9254 21.788L8.75155 15.8097V15.8097L8.75033 15.8074L8.74938 15.8063L8.74627 15.8043V15.8043L2.76305 13.6285C2.47599 13.522 2.22841 13.3301 2.05358 13.0787C1.87875 12.8273 1.78503 12.5285 1.78503 12.2223C1.78503 11.9161 1.87875 11.6172 2.05358 11.3658C2.22841 11.1144 2.47599 10.9226 2.76306 10.816L2.76773 10.8143L8.74599 8.6404V8.6404L8.74938 8.63823L8.75143 8.63515V8.63515L10.9272 2.65191C11.0337 2.36484 11.2256 2.11727 11.477 1.94243ZM15.2116 15.5504L14.5078 15.2911C14.5833 15.0862 14.7024 14.9001 14.8568 14.7457C15.0112 14.5912 15.1973 14.4722 15.4022 14.3967L15.4052 14.3956L21.3818 12.2223L15.4052 10.049L15.4022 10.0479C15.1973 9.97239 15.0112 9.85332 14.8568 9.69889C14.7024 9.54447 14.5833 9.35838 14.5078 9.15345L14.5067 9.15046L12.3334 3.17394L10.1601 9.15046L10.159 9.15345C10.0835 9.35837 9.96447 9.54447 9.81004 9.69889C9.65561 9.85332 9.46952 9.97239 9.2646 10.0479L9.2616 10.049L3.28508 12.2223L9.2646 14.3966C9.46952 14.4722 9.65562 14.5912 9.81004 14.7457C9.96446 14.9001 10.0835 15.0862 10.159 15.2911L10.1601 15.2941L12.3334 21.2707L14.5067 15.2941L15.2116 15.5504Z"
				fill="black"
			/>
		</svg>
	</div>
</template>

<style scoped lang="scss">
/* TODO: make a refactoring of this mess */
.loader {
	width: 120px;
	height: 120px;

	position: relative;

	display: flex;

	& > svg {
		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}
}

.loader-circle {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	margin-left: -60px;
	margin-top: -60px;
}

.loader-line-mask {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 60px;
	height: 120px;
	margin-left: -60px;
	margin-top: -60px;
	overflow: hidden;
	transform-origin: 60px 60px;
	mask-image: linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	-webkit-mask-image: -webkit-linear-gradient(
		top,
		rgba(0, 0, 0, 1),
		rgba(0, 0, 0, 0)
	);
	animation: rotate 1.2s infinite linear;

	.loader-line {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		box-shadow: inset 0 0 0 4px rgba(19, 87, 218, 0.5);
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes fade {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.25;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
