import { FilmsSpecialForYou } from './FilmsSpecialForYou/FilmsSpecialForYou'

export const RecommendedFilms = () => {
	return (
		<div>
			<div className='flex justify-start ml-64 mb-10'>
				<h3 className='text-3xl font-medium'>Special for you</h3>
			</div>
			<FilmsSpecialForYou />
		</div>
	)
}
