type Props = {
	index: number
}

export const SkeletonCards = ({ index }: Props) => {
	return (
		<div
			key={index}
			className='h-96 w-72 bg-zinc-800 rounded-3xl mb-5 animate-pulse '
		>
			<div className='h-full w-full bg-zinc-700 rounded-3xl'></div>

			<div className='flex items-baseline flex-col gap-3 p-3 '>
				<div className='w-72 h-6 bg-zinc-700 animate-pulse rounded-3xl'></div>
				<div className='w-72 flex justify-between'>
					<span className='w-16 h-5 bg-zinc-700 animate-pulse rounded-3xl'></span>
					<span className='w-16 h-5 bg-zinc-700 animate-pulse rounded-3xl'></span>
				</div>
			</div>
		</div>
	)
}
