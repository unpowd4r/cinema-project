import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'todolistsApi',
	baseQuery: async (args, api, extraOptions) => {
		const result = await fetchBaseQuery({
			baseUrl: import.meta.env.VITE_APP_BASE_URL,
			prepareHeaders: headers => {
				headers.set('X-API-KEY', `${import.meta.env.VITE_APP_API_KEY}`)
			},
		})(args, api, extraOptions)
		return result
	},
	endpoints: () => ({}),
	refetchOnReconnect: true,
})
