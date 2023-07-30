import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user/user.slice'

const store = configureStore({
	reducer: {
		user: UserReducer
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
