import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account } from './types.ts'
import { merge } from 'lodash-es'

export const useStore = defineStore(
  'main',
  () => {
    const accounts = ref<Account[]>([])

    function addAccount() {
      accounts.value.push(accountInitialState())
    }

    function updateAccountByIndex(index: number, payload: Account) {
      accounts.value[index] = merge(accounts.value[index], payload)
    }

    function deleteAccountByIndex(index: number) {
      accounts.value.splice(index, 1)
    }

    function accountInitialState(): Account {
      return {
        label: [],
        type: 'local',
        login: '',
        password: '',
      }
    }

    return {
      accounts,
      addAccount,
      updateAccountByIndex,
      deleteAccountByIndex,
    }
  },
  {
    persist: true,
  },
)