<script setup lang="ts">
import AppClose from './AppClose.vue'
</script>

<template>
	<div class="notification">
		<div class="notification__text"></div>
		<AppClose />
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.notification {
	position: relative;

	padding: 1.125rem 4.25rem 1.125rem 1.125rem;

	border-radius: 0.75rem;
	border: 1px solid $colorPrimaryBorder;

	background-color: $colorSecondaryBackground;

	&__text {
		width: 100%;
		height: 2.25rem;

		background: $gradientSkeleton;
		border-radius: 0.75rem;
	}
}
</style>
