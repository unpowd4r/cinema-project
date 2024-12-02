import { NavLink } from 'react-router'
import { PATH } from '../../app/path'

type Props = {
	FilmName: string
	Year: string
	Rating: string
}

export const CardFilm = ({ FilmName, Year, Rating }: Props) => {
	return (
		<NavLink to={PATH.FILM_PAGE}>
			<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5 hover:bg-orange-600 transition duration-150 hover:scale-110'></div>
			<div className='flex justify-between'>
				<div>{FilmName}</div>
				<div className='flex gap-10'>
					<span>{Year}</span>
					<span>{Rating}</span>
				</div>
			</div>
		</NavLink>
	)
}
