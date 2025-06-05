<script setup lang="ts">
import Textarea from 'primevue/textarea'
import { computed } from 'vue'
import type { AccountLabel } from '../../types.ts'

const props = defineProps<{
	modelValue: AccountLabel[]
	invalid?: boolean
}>()

const emit = defineEmits<{
	(event: 'update:modelValue', payload: AccountLabel[]): void
}>()

const value = computed(() => {
	return props.modelValue.map((item) => item.text).join(';')
})

function onUpdate(value: string) {
	const payload = value
		.split(';')
		.filter((item) => item.trim().length > 0)
		.map((item) => ({ text: item }))

	emit('update:modelValue', payload)
}
</script>

<template>
	<Textarea
		:model-value="value"
		@update:model-value="onUpdate"
		rows="1"
		auto-resize
		fluid
		:invalid="invalid"
		placeholder="Введите метки"
	/>
</template>
