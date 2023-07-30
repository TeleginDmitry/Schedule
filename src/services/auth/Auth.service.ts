import instance, { instanceSimple } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import {
	ILoginRequest,
	ILoginResponse,
	IRefreshRequest,
	IRefreshResponse,
	IVerifyRequest,
	IVerifyResponse
} from 'types/auth.types'

export const AuthService = {
	refresh: async ({ refresh }: IRefreshRequest): Promise<AxiosResponse<IRefreshResponse>> => {
		return await instanceSimple.post<IRefreshResponse>(`refresh/`, {
			refresh
		})
	},

	login: async ({ password, username }: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> => {
		return instance.post<ILoginResponse>(`login/`, { password, username })
	},

	verify: async (_: IVerifyRequest): Promise<AxiosResponse<IVerifyResponse>> => {
		return instance.get<IVerifyResponse>(`verify/`)
	}
}
