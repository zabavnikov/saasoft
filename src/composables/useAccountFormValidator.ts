import { useVuelidate } from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import type { Ref } from 'vue'
import type { Account } from '../types.ts'
import { computed } from 'vue'

export function useAccountFormValidator(form: Ref<Account>) {
	const rules = {
		label: {
			maxLength: maxLength(50),
		},
		login: {
			required,
			maxLength: maxLength(100),
		},
		password: {
			maxLength: maxLength(100),
		},
	}

	const validator = useVuelidate(rules, form)
	const isValid = computed(() => validator.value.$errors.length === 0)

	return {
		validator,
		isValid,
	}
}
