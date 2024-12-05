// import { generateCardInfo } from '../../../HomePage/HomePage'

import { FilmsResponseSimilars } from '../../../../app/types/types'
import { CardFilm } from '../../../CardFilm/CardFilm'

type Props = {
	similarFilms: FilmsResponseSimilars | undefined
	isSimilarFilms: boolean
}

export const FilmsSpecialForYou = ({ similarFilms, isSimilarFilms }: Props) => {
	return (
		<div className='flex justify-center overflow-x-auto scroll-smooth'>
			<div className='flex justify-center gap-10 max-w-1/2 p-10 ml-20 '>
				{similarFilms?.items.map(ci => (
					<CardFilm
						key={ci.filmId}
						filmId={ci.filmId}
						filmName={ci.nameRu}
						filmImage={ci.posterUrl}
						isLoading={isSimilarFilms}
					/>
				))}
			</div>
		</div>
	)
}
