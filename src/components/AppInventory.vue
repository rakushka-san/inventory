<script setup lang="ts">
import InventoryCell from './InventoryCell.vue'
import AppModal from './AppModal.vue'
import InventoryItem from './InventoryItem.vue'

import { useItemStore } from './../stores/ItemStore'
import type { IItem } from '@/models/Item'
const itemStore = useItemStore()

function chooseItem(item: IItem | undefined) {
	if (item) {
		itemStore.chooseItem(item.id)
	}
}
</script>

<template>
	<div class="inventory">
		<div class="inventory__grid">
			<InventoryCell
				v-for="(item, index) in itemStore.items"
				:key="index"
				:item="item"
				@click="chooseItem(item)"
			></InventoryCell>
		</div>
		<AppModal v-show="itemStore.chosenItem" class="inventory__modal"
			><InventoryItem
		/></AppModal>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.inventory {
	position: relative;

	border-radius: 0.75rem;
	border: 1px solid $colorPrimaryBorder;

	background-color: $colorPrimaryBorder;

	overflow: hidden;

	&__grid {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		gap: 1px;
	}

	&__modal {
		top: 0;
		right: 0;
		bottom: 0;

		border-left: 1px solid $colorPrimaryBorder;
	}
}
</style>
