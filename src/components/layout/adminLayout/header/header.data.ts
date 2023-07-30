import {
	PAGE_ADMIN,
	PAGE_ADMIN_PRICE,
	PAGE_ADMIN_ROOM,
	PAGE_ADMIN_STAFF
} from 'config/index.config'

export const headerItems = [
	{ id: 1, title: 'Расписание', to: PAGE_ADMIN },
	{ id: 2, title: 'Персонал', to: PAGE_ADMIN_STAFF },
	{ id: 3, title: 'Комнаты', to: PAGE_ADMIN_ROOM },
	{ id: 4, title: 'Цены', to: PAGE_ADMIN_PRICE }
]
