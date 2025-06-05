<script setup lang="ts">
import Select from 'primevue/select'
import type { AccountType, Maybe } from '../../types.ts'
import { ACCOUNT_TYPE_LIST } from '../../constants.ts'

const model = defineModel<Maybe<AccountType>>({
	default: null,
})
</script>

<template>
	<Select
		v-model="model"
		:options="ACCOUNT_TYPE_LIST"
		option-label="name"
		option-value="id"
		placeholder="Выберите тип записи"
		fluid
	/>
</template>