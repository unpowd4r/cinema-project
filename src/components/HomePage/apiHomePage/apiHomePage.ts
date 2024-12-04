import { baseApi } from '../../../app/baseApi'
import {
	FactsResponse,
	FilmInfo,
	FilmResponse,
	VideoResponse,
} from '../../../app/types/types'

export const apiHomePage = baseApi.injectEndpoints({
	endpoints: build => ({
		getFilmOrCategories: build.query<
			FilmResponse,
			{ type: string; page: number }
		>({
			query: ({ type, page }) => ({
				url: `collections?type=${type}&page=${page}`,
				method: 'GET',
			}),
		}),
		getFilmById: build.query<VideoResponse, { id: number }>({
			query: ({ id }) => ({ url: `${id}/videos`, method: 'GET' }),
		}),
		getInfoForFilm: build.query<FilmInfo, { id: number }>({
			query: ({ id }) => ({ url: `/${id}`, method: 'GET' }),
		}),
		getFactsForFilm: build.query<FactsResponse, { id: number }>({
			query: ({ id }) => ({ url: `/${id}/facts`, method: 'GET' }),
		}),
	}),
})

export const {
	useGetFilmOrCategoriesQuery,
	useGetFilmByIdQuery,
	useGetInfoForFilmQuery,
	useGetFactsForFilmQuery,
} = apiHomePage
