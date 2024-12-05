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

type FactItem = {
	text: string
	type: string
	spoiler: boolean
}

export type FactsResponse = {
	total: number
	items: FactItem[]
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

export type FilmInfo = {
	kinopoiskId: number
	kinopoiskHDId: string
	imdbId: string
	nameRu: string
	nameEn: string
	nameOriginal: string
	posterUrl: string
	posterUrlPreview: string
	coverUrl: string
	logoUrl: string
	reviewsCount: number
	ratingGoodReview: number
	ratingGoodReviewVoteCount: number
	ratingKinopoisk: number
	ratingKinopoiskVoteCount: number
	ratingImdb: number
	ratingImdbVoteCount: number
	ratingFilmCritics: number
	ratingFilmCriticsVoteCount: number
	ratingAwait: number
	ratingAwaitCount: number
	ratingRfCritics: number
	ratingRfCriticsVoteCount: number
	webUrl: string
	year: number
	filmLength: number
	slogan: string
	description: string
	shortDescription: string
	editorAnnotation: string
	isTicketsAvailable: boolean
	productionStatus: string
	type: 'FILM'
	ratingMpaa: string
	ratingAgeLimits: string
	hasImax: boolean
	has3D: boolean
	lastSync: string
	countries: Country[]
	genres: Genre[]
	startYear: number
	endYear: number
	serial: boolean
	shortFilm: boolean
	completed: boolean
}

export type FilmResponse = Response<FilmItem>

export type VideoResponse = Response<VideoItem>
