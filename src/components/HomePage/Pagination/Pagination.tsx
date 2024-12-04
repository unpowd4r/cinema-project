import { Dispatch, SetStateAction } from 'react'

type Props = {
	page: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	isLoading: boolean
}

export const Pagination = ({
	currentPage,
	setCurrentPage,
	page,
	isLoading,
}: Props) => {
	const handleNextPage = () => {
		if (page && currentPage < page) {
			setCurrentPage(prevPage => prevPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prevPage => prevPage - 1)
		}
	}

	return (
		<>
			{isLoading ? (
				<div className='flex justify-evenly mt-5 w-full'>
					<button
						onClick={handlePrevPage}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-300'
					>
						Previous
					</button>
					<span>Page {currentPage}</span>
					<button
						onClick={handleNextPage}
						disabled={page === currentPage}
						className='px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-300'
					>
						Next
					</button>
				</div>
			) : (
				<div></div>
			)}
		</>
	)
}
