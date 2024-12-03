import { useState } from 'react'
import { CardFilm } from '../CardFilm/CardFilm'
import { CategoriesButtons } from '../FilmPage/CategoriesButtons/CategoriesButtons'
import { useGetFilmOrCategoriesQuery } from './apiHomePage/apiHomePage'

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const { data, isLoading } = useGetFilmOrCategoriesQuery({
		type: 'TOP_POPULAR_ALL',
		page: currentPage,
	})

	const handleNextPage = () => {
		if (data?.totalPages && currentPage < data.totalPages) {
			setCurrentPage(prevPage => prevPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prevPage => prevPage - 1)
		}
	}

	return (
		<div className='flex flex-wrap gap-20 ml-64 pt-40'>
			<CategoriesButtons />
			{isLoading
				? Array.from({ length: 12 }).map((_, index) => (
						<div
							key={index}
							className='h-96 w-72 bg-zinc-800 rounded-3xl mb-5 animate-pulse '
						>
							<div className='h-full w-full bg-zinc-700 rounded-3xl'></div>

							<div className='flex items-baseline flex-col gap-3 p-3 '>
								<div className='w-72 h-6 bg-zinc-700 animate-pulse rounded-3xl'></div>
								<div className='w-72 flex justify-between'>
									<span className='w-16 h-5 bg-zinc-700 animate-pulse rounded-3xl'></span>
									<span className='w-16 h-5 bg-zinc-700 animate-pulse rounded-3xl'></span>
								</div>
							</div>
						</div>
				  ))
				: data?.items.map(film => (
						<CardFilm
							key={film.kinopoiskId}
							filmImage={film.posterUrl}
							filmName={film.nameRu}
							year={film.year}
							rating={film.ratingKinopoisk}
							filmId={film.kinopoiskId}
						/>
				  ))}
			<div className='flex justify-evenly mt-5 w-full '>
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className='px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-300'
				>
					Previous
				</button>
				<span>Page {currentPage}</span>
				<button
					onClick={handleNextPage}
					disabled={data?.totalPages === currentPage}
					className='px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-300'
				>
					Next
				</button>
			</div>
		</div>
	)
}
