import { IPrice } from './price.types'
import { IRoom } from './room.types'
import { IStaff } from './staff.types'

export interface ISchedule {
	id: number
	service: Omit<IPrice, 'price'>
	trainer: IStaff
	room: IRoom
	price: number
	start_datetime: string
	end_datetime: string
	recurring: boolean
	date: string
}

export interface IScheduleRequest {
	service: number
	trainer: number
	room: number
	start_datetime: string
	end_datetime: string
	date: string
}

export type SortType = 'trainer' | 'room' | 'service'

export interface IScheduleRequestParams {
	sort: SortType
	date: string
}
