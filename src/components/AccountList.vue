<script setup lang="ts">
import AccountListForm from './AccountListForm.vue'
import AccountListHeading from './AccountListHeading.vue'
import { useStore } from '../store.ts'
import { useId } from 'vue'
import Button from 'primevue/button'

const { accounts, addAccount, updateAccountByIndex, deleteAccountByIndex } = useStore()
</script>

<template>
	<div class="w-5xl">
		<AccountListHeading />

		<div class="space-y-4 my-4">
			<AccountListForm
				v-for="(account, index) in accounts"
				:account="account"
				:key="useId()"
				@update="updateAccountByIndex(index, $event)"
				@delete="deleteAccountByIndex(index)"
			/>
		</div>

		<Button @click="addAccount" severity="success" class="w-full">+</Button>
	</div>
</template>