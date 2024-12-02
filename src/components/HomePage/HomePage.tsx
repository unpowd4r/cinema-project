import { CardFilm } from '../CardFilm/CardFilm'
import { CategoriesButtons } from '../FilmPage/CategoriesButtons/CategoriesButtons'

export const generateCardInfo = (count: number) => {
	return Array.from({ length: count }, (_, index) => ({
		id: index + 1,
		FilmName: 'FilmName',
		Year: 'Year',
		Rating: 'rating',
	}))
}

const CardInfo = generateCardInfo(12)

export const HomePage = () => {
	return (
		<div className='flex flex-wrap gap-20 ml-64 pt-40'>
			<CategoriesButtons />
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
