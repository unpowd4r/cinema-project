import { ButtonCategory } from './ButtonCategory/ButtonCategory'

const titlesButtons = [
	{ id: 1, title: 'All' },
	{ id: 2, title: 'Comedy' },
	{ id: 3, title: 'Fantasy' },
	{ id: 4, title: 'Drama' },
	{ id: 5, title: 'History' },
	{ id: 6, title: 'Horror' },
]

export const CategoriesButtons = () => {
	return (
		<div className='w--full flex justify-center gap-20 mb-20'>
			{titlesButtons.map(bt => (
				<ButtonCategory key={bt.id} title={bt.title} />
			))}
		</div>
	)
}
