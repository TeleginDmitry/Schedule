import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'types/index.types'
import { login, verify } from './user.actions'
import { AxiosError } from 'axios'
import { IVerifyResponse } from 'types/auth.types'
import { removeTokensCookie } from 'services/auth/Auth.helper'

interface IInitialState {
	user: IUser | null
	error: AxiosError | null
	isLoading: boolean
	isError: boolean
	isAuth: boolean
}

const initialState: IInitialState = {
	user: null,
	isLoading: false,
	isError: false,
	error: null,
	isAuth: false
}

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.error = null
			state.isLoading = false
			state.isError = false
			state.user = null
			state.isAuth = false

			removeTokensCookie()
		}
	},
	extraReducers: (builder) => {
		builder.addCase(verify.fulfilled, (state, { payload }: PayloadAction<IVerifyResponse>) => {
			state.isLoading = false
			state.user = payload
			state.isAuth = true
			state.isError = false
			state.error = null
		})
		builder.addCase(
			verify.rejected,
			(state, { payload }: PayloadAction<AxiosError | undefined>) => {
				if (payload) {
					state.error = payload
					state.isLoading = false
					state.isError = true
					state.user = null
					state.isAuth = false
				}
			}
		)

		builder.addCase(login.rejected, (state, { payload }: PayloadAction<AxiosError | undefined>) => {
			if (payload) {
				state.error = payload
				state.isLoading = false
				state.isError = true
				state.user = null
				state.isAuth = false
			}
		})
		builder.addMatcher(isLoadingAction, (state) => {
			state.isLoading = true
		})
	}
})

function isLoadingAction(action: AnyAction) {
	return action.type.endsWith('pending')
}

export const { logout } = UserSlice.actions

export default UserSlice.reducer
