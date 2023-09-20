<template>
	<div class="modal">
		<slot></slot>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.modal {
	position: absolute;

	background-color: rgba($colorSecondaryBackground, 0.9);
	backdrop-filter: blur(8px);
}
</style>
