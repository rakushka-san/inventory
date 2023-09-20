<template>
	<div class="modal">
		<slot></slot>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.modal {
	position: absolute;

	border-left: 1px solid $colorPrimaryBorder;
	background-color: rgba($colorSecondaryBackground, 0.9);
	backdrop-filter: blur(8px);
}
</style>
