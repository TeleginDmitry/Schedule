import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { ISchedule, IScheduleRequest, IScheduleRequestParams } from 'types/schedule.types'

export const ScheduleService = {
	getSchedules: async (
		params: Partial<IScheduleRequestParams>
	): Promise<AxiosResponse<ISchedule[]>> => {
		return instance.get<ISchedule[]>('training-classes/', { params })
	},
	createSchedule: async (data: IScheduleRequest): Promise<AxiosResponse<ISchedule>> => {
		return instance.post<ISchedule>('training-classes/', data)
	},
	changeSchedule: async (id: number, data: IScheduleRequest): Promise<AxiosResponse<ISchedule>> => {
		return instance.put<ISchedule>(`training-classes/${id}/`, data)
	},
	deleteSchedule: async (id: number): Promise<AxiosResponse<void>> => {
		return instance.delete<void>(`training-classes/${id}/`)
	}
}
