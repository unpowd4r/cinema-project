import he from 'he'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router'
import {
	useGetFactsForFilmQuery,
	useGetFilmByIdQuery,
	useGetInfoForFilmQuery,
} from '../HomePage/apiHomePage/apiHomePage'
import { Loader } from '../loader/Loader'
import { CategoriesButtons } from './CategoriesButtons/CategoriesButtons'
import { RecommendedFilms } from './RecommendedFilms/RecommendedFilms'

export const FilmPage = () => {
	const { id } = useParams<{ id: string }>()
	const filmId = Number(id)

	const { data: filmData } = useGetFilmByIdQuery({
		id: filmId,
	})

	const { data: infoData, isLoading: isInfoLoading } = useGetInfoForFilmQuery({
		id: filmId,
	})

	const { data: factsInfo } = useGetFactsForFilmQuery({ id: filmId })

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
				<div className='bg-zinc-800 min-h-svh w-1/3 rounded-3xl'>
					{isInfoLoading ? (
						<Loader />
					) : (
						<img
							src={infoData?.posterUrlPreview}
							alt='Film Preview'
							className='min-h-svh w-full object-contain rounded-3xl cursor-pointer'
							onClick={handleOpenModal}
						/>
					)}
				</div>
				<div className='flex items-center justify-center flex-col gap-5 bg-zinc-800 min-h-svh w-1/3 rounded-3xl p-5'>
					<div className='mb-5'>
						<h1 className='font-bold mb-5'>{infoData?.nameRu}</h1>
						{infoData?.description && (
							<>
								<h2 className='font-medium text-2xl mb-3'>Описание:</h2>
								<div>{infoData?.description}</div>
							</>
						)}
					</div>
					<div>
						{factsInfo?.items && factsInfo?.items.length > 0 && (
							<>
								<h3 className='font-medium text-2xl mb-3'>Факты о фильме: </h3>
								{factsInfo?.items.map((facts, index) => (
									<div key={index} className='mb-4 font-medium '>
										{he.decode(facts.text.replace(/<\/?[^>]+(>|$)/g, ''))}
									</div>
								))}
							</>
						)}
					</div>
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
							<ReactPlayer
								width='100%'
								height='500px'
								url={filmData?.items?.[0]?.url}
								controls
							/>
						</div>
					</div>
				)}
			</div>
			<RecommendedFilms />
		</div>
	)
}
