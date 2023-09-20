<template>
	<div class="frame">
		<img
			src="./../assets/img/frame-img.png"
			alt="Frame Image"
			class="frame__image"
		/>
		<div class="frame__header"></div>
		<div class="frame__line"></div>
		<div class="frame__line"></div>
		<div class="frame__line"></div>
		<div class="frame__line"></div>
		<div class="frame__line"></div>
		<div class="frame__line"></div>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.frame {
	padding: 1.125rem 0.875rem 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 0.75rem;
	border: 1px solid $colorPrimaryBorder;

	background-color: $colorSecondaryBackground;

	&__image {
		width: 100%;
		aspect-ratio: 13 / 15;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	&__header {
		margin-top: 1.25rem;

		width: 100%;
		height: 1.625rem;

		background: $gradientSkeleton;
		border-radius: 0.5rem;
	}

	&__line {
		margin-top: 1rem;

		width: 100%;
		height: 0.625rem;

		background: $gradientSkeleton;
		border-radius: 0.25rem;
	}
}
</style>
