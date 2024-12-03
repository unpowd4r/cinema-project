import { baseApi } from '../../../app/baseApi'
import { FilmInfo, FilmResponse, VideoResponse } from '../../../app/types/types'

export const apiHomePage = baseApi.injectEndpoints({
	endpoints: build => ({
		getFilmOrCategories: build.query<
			FilmResponse,
			{ type: string; page: number }
		>({
			query: ({ type, page }) => {
				return {
					url: `collections?type=${type}&page=${page}`,
					method: 'GET',
				}
			},
		}),
		getFilmById: build.query<VideoResponse, { id: number }>({
			query: ({ id }) => {
				return {
					url: `${id}/videos`,
					method: 'GET',
				}
			},
		}),
		getInfoForFilm: build.query<FilmInfo, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/${id}`,
					method: 'GET',
				}
			},
		}),
	}),
})

export const {
	useGetFilmOrCategoriesQuery,
	useGetFilmByIdQuery,
	useGetInfoForFilmQuery,
} = apiHomePage
