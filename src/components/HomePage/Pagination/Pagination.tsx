import { Dispatch, SetStateAction } from 'react'
import { ButtonPagination } from './ButtonPagination/ButtonPagination'

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
	return (
		<>
			{isLoading && (
				<div className='flex justify-evenly mt-5 w-full'>
					<ButtonPagination
						page={page}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			)}
		</>
	)
}
