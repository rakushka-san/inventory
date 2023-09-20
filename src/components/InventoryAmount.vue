<template>
	<div class="inventory-amount">
		<input type="number" placeholder="Введите количество" class="input" />
		<div class="inventory-amount__controls">
			<button class="inventory-amount__button button button_normal">
				Отмена
			</button>
			<button class="inventory-amount__button button button_danger">
				Подтвердить
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.inventory-amount {
	padding: 1.25rem 1.3125rem;

	&__controls {
		margin-top: 1.75rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__button {
		margin-left: 0.625rem;
		padding: 0.5rem 0;

		width: 100%;

		&:first-of-type {
			flex-basis: 66%;
			margin-left: 0;
		}
	}
}
</style>
