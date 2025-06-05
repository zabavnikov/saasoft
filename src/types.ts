import { ACCOUNT_TYPES } from './constants.ts'

export type Maybe<T> = T | null

export type AccountLabel = Record<'text', string>
export type AccountType = keyof typeof ACCOUNT_TYPES

export type Account = {
  label: AccountLabel[]
  type: AccountType
  login: string
  password: Maybe<string>
}
