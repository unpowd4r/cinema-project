type Country = {
	country: string
}

type Genre = {
	genre: string
}

type VideoItem = {
	url: string
	name: string
	site: string
}

type Response<T> = {
	total: number
	totalPages?: number
	items: T[]
}

export type FilmItem = {
	kinopoiskId: number
	nameRu: string
	nameEn: string
	nameOriginal: string
	countries: Country[]
	genres: Genre[]
	ratingKinopoisk: number
	ratingImbd: number
	year: string
	type: 'FILM'
	posterUrl: string
	posterUrlPreview: string
}

export type FilmResponse = Response<FilmItem>

export type VideoResponse = Response<VideoItem>
