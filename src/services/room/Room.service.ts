import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { IRoomRequest, IRoom } from 'types/room.types'

export const RoomService = {
	getRooms: async (): Promise<AxiosResponse<IRoom[]>> => {
		return instance.get<IRoom[]>('rooms/')
	},
	createRoom: async (data: IRoomRequest): Promise<AxiosResponse<IRoom>> => {
		return instance.post<IRoom>('rooms/', data)
	},
	changeRoom: async (
		id: number,
		data: Partial<Omit<IRoom, 'id'>>
	): Promise<AxiosResponse<IRoom>> => {
		return instance.put<IRoom>(`rooms/${id}/`, data)
	},
	deleteRoom: async (id: number): Promise<AxiosResponse<void>> => {
		return instance.delete<void>(`rooms/${id}/`)
	}
}
