import { CategoriesButtons } from './CategoriesButtons/CategoriesButtons'
import { RecommendedFilms } from './RecommendedFilms/RecommendedFilms'

export const FilmPage = () => {
	return (
		<div className='w-full pt-40 pb-40'>
			<CategoriesButtons />

			<div className=' flex justify-center gap-24 mb-10'>
				<div className=' bg-zinc-800 min-h-96 w-1/2 rounded-3xl'></div>
				<div className='bg-zinc-800 min-h-60 w-96 rounded-3xl'></div>
			</div>
			<RecommendedFilms />
		</div>
	)
}
