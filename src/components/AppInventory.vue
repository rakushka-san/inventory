<script setup lang="ts">
import InventoryCell from './InventoryCell.vue'
</script>

<template>
	<div class="inventory">
		<div class="inventory__grid">
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
			<InventoryCell></InventoryCell>
		</div>
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
}
</style>
