<script setup lang="ts">
import AppFrame from './components/AppFrame.vue'
import AppInventory from './components/AppInventory.vue'
import AppNotification from './components/AppNotification.vue'
import { useNotificationStore } from './stores/NotificationStore'

const notificationStore = useNotificationStore()
</script>

<template>
	<main>
		<div class="container">
			<AppFrame />
			<AppInventory />
			<AppNotification
				v-if="notificationStore.isNotificationVisible"
				class="notification"
			/>
		</div>
	</main>
</template>

<style lang="scss">
.container {
	padding: 2rem;

	display: grid;
	grid-template-columns: 14.75rem 32.8125rem;
	grid-template-rows: 31.25rem 4.5rem;
	gap: 1.5rem;
}

.notification {
	grid-column: 1 / span 2;
	grid-row: 2 / 3;
}
</style>
