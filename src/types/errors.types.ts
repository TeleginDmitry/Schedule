export interface ISheduleError {
	service: string
	trainer: string
	room: string
	start_datetime: string
	end_datetime: string
}

export interface IStaffError {
	first_name: string
	last_name: string
	description: string
}

export interface IRoomError {
	name: string
}

export interface IPriceError {
	name: string
	description: string
	price: string
}
