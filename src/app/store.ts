import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiHomePage } from '../components/HomePage/apiHomePage/apiHomePage'

export const store = configureStore({
	reducer: {
		[apiHomePage.reducerPath]: apiHomePage.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiHomePage.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
