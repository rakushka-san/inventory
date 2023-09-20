<script setup lang="ts">
import AppFrame from './components/AppFrame.vue'
import AppNotification from './components/AppNotification.vue'
</script>

<template>
	<main>
		<div class="container">
			<AppFrame class="frame" />
			<AppNotification class="notification" />
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

.frame {
	width: 100%;
}

.notification {
	grid-column: 1 / span 2;
	grid-row: 2 / 3;
}
</style>
