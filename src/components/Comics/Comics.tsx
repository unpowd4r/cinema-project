import { useState } from 'react'
import { ApiError } from '../../app/types/errorTypes'
import { SkeletonCards } from '../../app/ui/Skeletons/SkeletonCards'
import { CardFilm } from '../CardFilm/CardFilm'
import { ErrorSnackBar } from '../ErrorSnackBar/ErrorSnackBar'
import { CategoriesButtons } from '../FilmPage/CategoriesButtons/CategoriesButtons'
import { useGetFilmOrCategoriesQuery } from '../HomePage/apiHomePage/apiHomePage'
import { Pagination } from '../HomePage/Pagination/Pagination'

export const Comics = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const { data, isLoading, error } = useGetFilmOrCategoriesQuery({
		type: 'COMICS_THEME',
		page: currentPage,
	})

	const typedError = error as ApiError | undefined

	return (
		<div className='flex flex-wrap gap-20 ml-64 pt-40'>
			<CategoriesButtons />

			{isLoading
				? Array.from({ length: 12 }).map((_, index) => (
						<SkeletonCards key={index} index={index} />
				  ))
				: data?.items.map(film => (
						<CardFilm
							key={film.kinopoiskId}
							filmImage={film.posterUrl}
							filmName={film.nameRu}
							year={film.year}
							rating={film.ratingKinopoisk}
							filmId={film.kinopoiskId}
							isLoading={isLoading}
						/>
				  ))}

			<Pagination
				page={data?.totalPages || 0}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				isLoading={isLoading}
			/>

			<ErrorSnackBar typedError={typedError} />
		</div>
	)
}
