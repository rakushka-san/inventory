<template>
	<div class="inventory-cell">
		<img
			src="./../assets/img/Item Image.svg"
			alt="Item Image"
			class="inventory-cell__image"
		/>
		<div class="inventory-cell__amount-block">
			<p class="inventory-cell__amount">4</p>
		</div>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.inventory-cell {
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	background-color: $colorSecondaryBackground;
	cursor: pointer;

	&:hover {
		background-color: $colorHoverBackground;
	}

	&__image {
		width: 3.375rem;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	&__amount-block {
		position: absolute;
		bottom: -1px;
		right: 0;

		width: 1rem;
		aspect-ratio: 1 / 1;

		border: 1px solid $colorPrimaryBorder;

		border-top-left-radius: 0.375rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__amount {
		font-family: 'Inter';
		font-weight: 500;
		font-size: 0.625rem;
		color: rgba($colorPrimaryWhite, 0.4);
		text-align: center;
	}
}
</style>
