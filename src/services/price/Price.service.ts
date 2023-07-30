import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { IPriceRequest, IPrice } from 'types/price.types'

export const PriceService = {
	getPrices: async (): Promise<AxiosResponse<IPrice[]>> => {
		return instance.get<IPrice[]>('prices/')
	},
	createPrice: async (data: IPriceRequest): Promise<AxiosResponse<IPrice>> => {
		return instance.post<IPrice>('prices/', data)
	},
	changePrice: async (
		id: number,
		data: Partial<Omit<IPrice, 'id'>>
	): Promise<AxiosResponse<IPrice>> => {
		return instance.put<IPrice>(`prices/${id}/`, data)
	},
	deletePrice: async (id: number): Promise<AxiosResponse<void>> => {
		return instance.delete<void>(`prices/${id}/`)
	}
}
