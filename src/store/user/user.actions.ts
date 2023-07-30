import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'services/auth/Auth.service'
import { isAxiosError, AxiosError } from 'axios'
import { ILoginRequest, ILoginResponse, IVerifyRequest, IVerifyResponse } from 'types/auth.types'
import { saveTokensCookie } from 'services/auth/Auth.helper'

export const login = createAsyncThunk<ILoginResponse, ILoginRequest, { rejectValue: AxiosError }>(
	'user/login',
	async ({ username, password }, { rejectWithValue, dispatch }) => {
		try {
			const body = {
				username,
				password
			}
			const response = await AuthService.login(body)

			saveTokensCookie(response.data)

			dispatch(verify())

			return response.data
		} catch (error) {
			if (error && isAxiosError(error)) {
				return rejectWithValue(error)
			}

			throw error
		}
	}
)

export const verify = createAsyncThunk<
	IVerifyResponse,
	IVerifyRequest,
	{ rejectValue: AxiosError }
>('user/verify', async (_, { rejectWithValue }) => {
	try {
		const response = await AuthService.verify()

		return response.data
	} catch (error) {
		if (error && isAxiosError(error)) {
			return rejectWithValue(error)
		}

		throw error
	}
})
