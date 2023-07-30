import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { IStaffRequest, IStaff } from 'types/staff.types'

export const StaffService = {
	getStaffs: async (): Promise<AxiosResponse<IStaff[]>> => {
		return instance.get<IStaff[]>('staff/')
	},
	createStaff: async (data: IStaffRequest): Promise<AxiosResponse<IStaff>> => {
		return instance.post<IStaff>('staff/', data)
	},
	changeStaff: async (id: number, data: IStaffRequest): Promise<AxiosResponse<IStaff>> => {
		return instance.put<IStaff>(`staff/${id}/`, data)
	},
	deleteStaff: async (id: number): Promise<AxiosResponse<void>> => {
		return instance.delete<void>(`staff/${id}/`)
	}
}
