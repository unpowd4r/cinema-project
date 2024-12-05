import { PATH } from '../../../app/path'
import { ButtonCategory } from './ButtonCategory/ButtonCategory'

const titlesButtons = [
	{ id: 1, title: 'All', path: PATH.HOME_PAGE },
	{ id: 2, title: 'Vampire', path: PATH.VAMPIRE_PAGE },
	{ id: 3, title: 'Fantasy', path: PATH.HOME_PAGE },
	{ id: 4, title: 'Drama', path: PATH.HOME_PAGE },
	{ id: 5, title: 'History', path: PATH.HOME_PAGE },
	{ id: 6, title: 'Horror', path: PATH.HOME_PAGE },
]

export const CategoriesButtons = () => {
	return (
		<div className='w--full flex justify-center gap-20 mb-20'>
			{titlesButtons.map(bt => (
				<ButtonCategory key={bt.id} title={bt.title} path={bt.path} />
			))}
		</div>
	)
}
