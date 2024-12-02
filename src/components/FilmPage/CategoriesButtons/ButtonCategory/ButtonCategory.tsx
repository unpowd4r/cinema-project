type Props = {
	title: string
}

export const ButtonCategory = ({ title }: Props) => {
	return (
		<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
			{title}
		</button>
	)
}
