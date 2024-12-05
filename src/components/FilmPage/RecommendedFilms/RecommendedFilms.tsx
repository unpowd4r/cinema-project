import { FilmsResponseSimilars } from '../../../app/types/types'
import { FilmsSpecialForYou } from './FilmsSpecialForYou/FilmsSpecialForYou'

type Props = {
	similarFilms: FilmsResponseSimilars | undefined
	isSimilarFilms: boolean
}

export const RecommendedFilms = ({ similarFilms, isSimilarFilms }: Props) => {
	return (
		<div>
			<div className='flex justify-start ml-64 mb-10'>
				<h3 className='text-3xl font-medium'>Recommended for you</h3>
			</div>
			<div className='flex justify-center p-5'>
				<FilmsSpecialForYou
					similarFilms={similarFilms}
					isSimilarFilms={isSimilarFilms}
				/>
			</div>
		</div>
	)
}
