import axios, { isAxiosError } from 'axios'
import {
	saveTokensCookie,
	getAccessTokenCookie,
	removeTokensCookie,
	getRefreshTokenCookie
} from 'services/auth/Auth.helper'
import { AuthService } from 'services/auth/Auth.service'
import { API_URL } from 'config/api.config'

export const instanceSimple = axios.create({
	baseURL: API_URL
})

const instance = axios.create({
	baseURL: API_URL
})

instance.interceptors.request.use((config) => {
	const accessToken = getAccessTokenCookie()

	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			error.config._isRetry = true

			try {
				const refresh = getRefreshTokenCookie()

				if (!refresh) throw new Error()

				const response = await AuthService.refresh({ refresh })

				if (response.status === 200) {
					saveTokensCookie(response.data)

					return instance.request(error.config)
				}
			} catch (error) {
				if (isAxiosError(error)) {
					if (error.response?.data.code === 'token_not_valid') return removeTokensCookie()
				}
			}
		}
		throw error
	}
)

export default instance
