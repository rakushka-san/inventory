<script setup lang="ts">
import { useItemStore } from '@/stores/ItemStore'

const itemStore = useItemStore()

function validAmount() {
	if (!itemStore.amountToDelete) {
		itemStore.error = 'Введите количество'
		return false
	}

	if (itemStore.amountToDelete < 1) {
		itemStore.error = 'Количество должно быть не меньше 1'
		return false
	}

	if (
		itemStore.chosenItem &&
		itemStore.amountToDelete > itemStore.chosenItem.amount
	) {
		itemStore.error = `Нельзя удалить болee ${itemStore.chosenItem.amount}`
		return false
	}

	return true
}

function remove() {
	if (validAmount()) {
		itemStore.remove()
	}
}
</script>

<template>
	<div class="inventory-amount">
		<p class="inventory-amount__error">{{ itemStore.error }}</p>
		<input
			type="number"
			placeholder="Введите количество"
			class="input"
			v-model="itemStore.amountToDelete"
			min="1"
			:max="itemStore.chosenItem?.amount"
		/>
		<div class="inventory-amount__controls">
			<button
				class="inventory-amount__button button button_normal"
				@click="itemStore.isGoingToRemove = false"
			>
				Отмена
			</button>
			<button
				class="inventory-amount__button button button_danger"
				@click="remove"
			>
				Подтвердить
			</button>
		</div>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.inventory-amount {
	padding: 1.25rem 1.3125rem;

	&__error {
		width: 100%;
		padding-bottom: 0.5rem;
		text-align: center;
		color: $colorPrimaryRed;
	}

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
