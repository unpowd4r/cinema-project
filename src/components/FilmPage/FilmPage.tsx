import { useState } from 'react'
import { useParams } from 'react-router'
import {
	useGetFilmByIdQuery,
	useGetInfoForFilmQuery,
} from '../HomePage/apiHomePage/apiHomePage'
import { CategoriesButtons } from './CategoriesButtons/CategoriesButtons'
import { RecommendedFilms } from './RecommendedFilms/RecommendedFilms'

export const FilmPage = () => {
	const { id } = useParams<{ id: string }>()
	const filmId = Number(id)

	const { data: filmData, isLoading: isFilmLoading } = useGetFilmByIdQuery({
		id: filmId,
	})
	const { data: infoData, isLoading: isInfoLoading } = useGetInfoForFilmQuery({
		id: filmId,
	})

	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='w-full pt-40 pb-40'>
			<CategoriesButtons />

			<div className='flex justify-center gap-24 mb-10'>
				<div className='bg-zinc-800 min-h-96 w-1/2 rounded-3xl'>
					<img
						src={infoData?.posterUrlPreview}
						alt='Film Preview'
						className=' w-fit object-cover rounded-3xl cursor-pointer '
						onClick={handleOpenModal}
					/>
				</div>

				{isModalOpen && (
					<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
						<div className='relative bg-zinc-800 rounded-3xl p-5 w-[80%] max-w-4xl'>
							<button
								onClick={handleCloseModal}
								className='absolute top-0 right-0 p-2 text-white'
							>
								X
							</button>
							<video
								src={filmData?.items?.[0]?.url}
								width='100%'
								height='auto'
								controls
								autoPlay
							/>
						</div>
					</div>
				)}
			</div>
			<RecommendedFilms />
		</div>
	)
}
