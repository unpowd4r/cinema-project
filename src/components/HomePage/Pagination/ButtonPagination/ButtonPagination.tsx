import { Dispatch, SetStateAction } from 'react'

type Props = {
	page: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	currentPage: number
}

export const ButtonPagination = ({
	page,
	currentPage,
	setCurrentPage,
}: Props) => {
	const handleNextPage = () => {
		if (currentPage < page) {
			setCurrentPage(prevPage => prevPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prevPage => prevPage - 1)
		}
	}

	const ButtonPag = [
		{
			id: 1,
			handle: handlePrevPage,
			title: 'Previous',
			disabled: currentPage === 1,
		},
		{
			id: 2,
			handle: handleNextPage,
			title: 'Next',
			disabled: page === currentPage,
		},
	]

	return (
		<>
			{ButtonPag.map((b, index) => (
				<div key={b.id} className='flex justify-between'>
					<button
						onClick={b.handle}
						disabled={b.disabled}
						className='px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-300'
					>
						{b.title}
					</button>
					{index === 0 && <div className='flex ml-80'>Page {currentPage}</div>}
				</div>
			))}
		</>
	)
}
