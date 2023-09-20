import { defineStore } from 'pinia'
import type { IItem } from '../models/Item'
import { ref } from 'vue'

const defaultItems: IItem[] = []
defaultItems.length = 25
defaultItems[0] = {
	id: 1,
	imgSrc: 'item1.svg',
	amount: 4,
}
defaultItems[1] = {
	id: 2,
	imgSrc: 'item2.svg',
	amount: 2,
}
defaultItems[2] = {
	id: 3,
	imgSrc: 'item3.svg',
	amount: 5,
}

export const useItemStore = defineStore('itemStore', () => {
	const items = ref(defaultItems)
	const chosenItem = ref<IItem | undefined>()
	const isGoingToRemove = ref(false)
	const amountToDelete = ref<number | undefined>()
	const error = ref<string | undefined>()

	const chooseItem = (id: number) => {
		emptyChosenItem()
		const index = items.value.findIndex(item => item.id === id)
		chosenItem.value = items.value[index]
	}

	const emptyChosenItem = () => {
		chosenItem.value = undefined
		isGoingToRemove.value = false
		amountToDelete.value = undefined
		error.value = undefined
	}

	const remove = () => {
		if (chosenItem.value && amountToDelete.value) {
			chosenItem.value.amount = chosenItem.value.amount - amountToDelete.value
			emptyChosenItem()
		}
	}

	return {
		items,
		chosenItem,
		isGoingToRemove,
		amountToDelete,
		error,
		chooseItem,
		emptyChosenItem,
		remove,
	}
})
