import { IUser } from './index.types'

export interface ITokens {
	refresh: string
	access: string
}

export type ILoginResponse = ITokens

export type IVerifyResponse = IUser

export type IRefreshResponse = ITokens

export interface ILoginRequest {
	username: string
	password: string
}

export type IVerifyRequest = void

export interface IRefreshRequest {
	refresh: string
}
