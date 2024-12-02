import { NavLink } from 'react-router'
import { PATH } from '../../app/path'

type Props = {
	filmName: string
	year: string
	rating: number
	filmImage: string
	filmId: number
}

export const CardFilm = ({
	filmName,
	year,
	rating,
	filmImage,
	filmId,
}: Props) => {
	return (
		<NavLink to={`/${PATH.FILM_PAGE}/${filmId}`}>
			<div className='h-96 w-72 bg-zinc-800 rounded-3xl mb-5  transition duration-150 hover:scale-110'>
				<img
					src={filmImage}
					alt={filmName}
					className=' h-96 w-72 rounded-3xl hover:border-4 border-zinc-500'
				/>
			</div>
			<div className='flex items-baseline flex-col gap-3'>
				<div>
					<h2 className='text-xl font-bold w-72'>{filmName}</h2>
				</div>
				<div className='w-72 flex justify-between'>
					<span>{year}</span>
					<span>{rating}</span>
				</div>
			</div>
		</NavLink>
	)
}
