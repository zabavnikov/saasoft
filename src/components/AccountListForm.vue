<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import AccountTypeSelect from './form/AccountTypeSelect.vue'
import AccountLabelInput from './form/AccountLabelInput.vue'
import AccountPasswordInput from './form/AccountPasswordInput.vue'
import AccountLoginInput from './form/AccountLoginInput.vue'
import Button from 'primevue/button'
import { ACCOUNT_TYPES } from '../constants.ts'
import type { Account } from '../types.ts'
import { useAccountFormValidator } from '../composables/useAccountFormValidator.ts'
import { cloneDeep } from 'lodash-es'

const { account } = defineProps<{
	account: Account
}>()

const emit = defineEmits<{
	(event: 'update', payload: Account): void
	(event: 'delete'): void
}>()

// Создаем локальную копию формы.
const form = ref(cloneDeep(account))
const { validator, isValid } = useAccountFormValidator(form)

const isLocal = computed(() => form.value.type === ACCOUNT_TYPES.local)

watch(isLocal, (value) => {
	if (!value) {
		form.value.password = null
	}
})

watch(
	form,
	(value) => {
		if (isValid.value) {
			emit('update', value)
		}
	},
	{
		deep: true,
	},
)
</script>

<template>
	<div class="grid grid-cols-9 gap-4">
		<div class="col-span-2">
			<AccountLabelInput
				v-model="form.label"
				:invalid="validator.label.$error"
				@blur="validator.password.$touch"
			/>
		</div>
		<div class="col-span-2">
			<AccountTypeSelect v-model="form.type" />
		</div>
		<div
			:class="{
				'col-span-2': isLocal,
				'col-span-4': !isLocal,
			}"
		>
			<AccountLoginInput
				v-model="form.login"
				:invalid="validator.login.$error"
				@blur="validator.login.$touch"
			/>
		</div>
		<div v-if="isLocal" class="col-span-2">
			<AccountPasswordInput
				v-model="form.password"
				:invalid="validator.password.$error"
				@blur="validator.password.$touch"
			/>
		</div>
		<div>
			<Button
				icon="pi pi-trash"
				severity="danger"
				class="!w-full"
				@click="emit('delete')"
			/>
		</div>
	</div>
</template>
