import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notificationsStore', () => {
	const isNotificationVisible = ref(true)
	const closeNotification = () => {
		isNotificationVisible.value = false
	}

	return { isNotificationVisible, closeNotification }
})
