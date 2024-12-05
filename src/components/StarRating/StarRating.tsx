import { useState } from 'react'

type Props = {
	totalStars: number
	rating: number
}

export const StarRating = ({ totalStars, rating }: Props) => {
	const [selectedStars] = useState(Math.round(rating * 2) / 2)

	return (
		<div className='flex space-x-1'>
			{[...Array(totalStars)].map((_, index) => {
				const starIndex = index + 1

				return (
					<span key={index} className='relative'>
						<span
							className={`${
								starIndex <= selectedStars ? 'text-yellow-400' : 'text-gray-400'
							}`}
						>
							★
						</span>

						{starIndex - 0.5 === selectedStars && (
							<span className='absolute left-0 top-0 w-1/2 text-yellow-400 overflow-hidden'>
								★
							</span>
						)}
					</span>
				)
			})}
		</div>
	)
}
