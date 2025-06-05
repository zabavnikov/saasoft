<script setup lang="ts">
import Password from 'primevue/password'
import type { Maybe } from '../../types.ts'

defineProps<{
	invalid?: boolean
}>()

const model = defineModel<Maybe<string>>({
	default: '',
})
</script>

<template>
	<Password
		v-model="model"
		placeholder="Введите пароль"
		fluid
		:invalid="invalid"
		:feedback="false"
	/>
</template>
