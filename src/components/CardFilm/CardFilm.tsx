type Props = {
	FilmName: string
	Year: string
	Rating: string
}

export const CardFilm = ({ FilmName, Year, Rating }: Props) => {
	return (
		<div>
			<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5'></div>
			<div className='flex justify-between'>
				<div>{FilmName}</div>
				<div className='flex gap-10'>
					<span>{Year}</span>
					<span>{Rating}</span>
				</div>
			</div>
		</div>
	)
}
