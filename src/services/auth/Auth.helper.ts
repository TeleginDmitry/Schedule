import { ITokens } from 'types/auth.types'
import { REFRESH, ACCESS } from 'config/api.config'
import Cookie from 'js-cookie'

export const getAccessTokenCookie = () => {
	const accessToken = Cookie.get(ACCESS)
	return accessToken || null
}
export const getRefreshTokenCookie = () => {
	const refreshToken = Cookie.get(REFRESH)
	return refreshToken || null
}

export const saveTokensCookie = ({ refresh, access }: ITokens) => {
	Cookie.set(ACCESS, access)
	Cookie.set(REFRESH, refresh)
}

export const removeTokensCookie = () => {
	Cookie.remove(ACCESS)
	Cookie.remove(REFRESH)
}
