<script setup lang="ts">
import InputText from 'primevue/inputtext'

defineProps<{
	invalid?: boolean
}>()

const model = defineModel({
	default: '',
})
</script>

<template>
	<InputText
		v-model="model"
		fluid
		placeholder="Введите логин"
		:invalid="invalid"
	/>
</template>
