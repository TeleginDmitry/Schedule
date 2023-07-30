export interface ISheduleInitialValues {
	service: number
	trainer: number
	room: number
	start_datetime: string
	end_datetime: string
}

export interface IStaffInitialValues {
	first_name: string
	last_name: string
	description: string
}

export interface IRoomInitialValues {
	name: string
}

export interface IPriceInitialValues {
	name: string
	description: string
	price: number
}
