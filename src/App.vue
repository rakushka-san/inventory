<script setup lang="ts">
import AppFrame from './components/AppFrame.vue'
</script>

<template>
	<main>
		<div class="container">
			<AppFrame class="frame" />
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
</style>
