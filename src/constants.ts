export const ACCOUNT_TYPES = {
	ldap: 'ldap',
	local: 'local',
} as const

export const ACCOUNT_TYPE_LIST = [
	{ id: ACCOUNT_TYPES.ldap, name: 'LDAP' },
	{ id: ACCOUNT_TYPES.local, name: 'Локальная' },
] as const