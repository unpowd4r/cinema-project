import { CardFilm } from '../../../CardFilm/CardFilm'
import { generateCardInfo } from '../../../HomePage/HomePage'

const CardInfo = generateCardInfo(4)

export const FilmsSpecialForYou = () => {
	return (
		<div className='flex justify-center gap-20'>
			{CardInfo.map(ci => (
				<CardFilm
					key={ci.id}
					FilmName={ci.FilmName}
					Year={ci.Year}
					Rating={ci.Rating}
				/>
			))}
		</div>
	)
}
