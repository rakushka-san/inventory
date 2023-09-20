<script setup lang="ts">
import { useItemStore } from '@/stores/ItemStore'
import AppClose from './AppClose.vue'
import AppModal from './AppModal.vue'
import InventoryAmount from './InventoryAmount.vue'

import { getImageUrl } from '@/helpers/getImageUrl'

const itemStore = useItemStore()
</script>

<template>
	<div class="inventory-item">
		<AppClose @click="itemStore.emptyChosenItem()" />
		<img
			:src="getImageUrl(itemStore.chosenItem?.imgSrc)"
			alt="Item Image"
			class="inventory-item__image"
		/>
		<div class="inventory-item__text">
			<div class="inventory-item__header"></div>
			<div class="inventory-item__line"></div>
			<div class="inventory-item__line"></div>
			<div class="inventory-item__line"></div>
			<div class="inventory-item__line"></div>
			<div class="inventory-item__line"></div>
		</div>

		<button
			class="inventory-item__button button button_danger"
			v-show="itemStore.chosenItem?.amount"
			@click="itemStore.isGoingToRemove = true"
		>
			Удалить предмет
		</button>

		<Transition name="slide-y">
			<AppModal
				v-show="itemStore.isGoingToRemove"
				class="inventory-item__modal"
			>
				<InventoryAmount />
			</AppModal>
		</Transition>
	</div>
</template>

<style lang="scss">
@import './../assets/scss/colors';

.inventory-item {
	padding: 3.4375rem 0.9375rem 1.125rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	&__image {
		margin: 0 2.8125rem;
		width: 8.125rem;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	&__text {
		margin-top: 1.875rem;
		padding-bottom: 1.5rem;
		width: 100%;

		border-top: 1px solid $colorPrimaryBorder;
		border-bottom: 1px solid $colorPrimaryBorder;
	}

	&__header {
		margin-top: 1rem;

		width: 100%;
		height: 1.875rem;

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

	&__button {
		margin-top: 1.125rem;
		width: 100%;
		padding: 0.69rem 0;
	}

	&__modal {
		left: 0;
		right: 0;
		bottom: 0;

		border-top: 1px solid $colorPrimaryBorder;
	}
}
</style>
