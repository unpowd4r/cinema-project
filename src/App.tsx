import './index.css'

function App() {
	return (
		<section className='min-h-screen pb-10'>
			<nav className='fixed top-0 left-0 h-full w-44 overflow-x-hidden z-10 bg-zinc-800 text-white flex flex-col justify-between items-center pt-5'>
				<ul className='h-1/2 flex flex-col justify-between mt-5 items-center'>
					<li className='transition-colors hover:text-amber-600'>
						<a href='#'>home</a>
					</li>
					<li className='transition-colors hover:text-amber-600'>
						<a href='#'>profile</a>
					</li>
					<li className='transition-colors hover:text-amber-600'>
						<a href='#'>settings</a>
					</li>
					<li className='transition-colors hover:text-amber-600'>
						<a href='#'>history</a>
					</li>
					<li className='transition-colors hover:text-amber-600'>
						<a href='#'>search</a>
					</li>
				</ul>
				<div className='pb-5'>
					<a className='transition-colors hover:text-amber-600' href='#'>
						exit logo
					</a>
				</div>
			</nav>
			<header className='ml-20 pt-10 absolute top-0 right-0 left-44 flex items-start '>
				<h1 className=' text-blue-50 font-medium'>My cinema</h1>
			</header>
			<section className='w-full pt-40'>
				<div className='w--full flex justify-center gap-20 mb-20'>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						All
					</button>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						Comedy
					</button>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						Fantasy
					</button>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						Drama
					</button>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						History
					</button>
					<button className='h-16 w-40 bg-zinc-800 rounded-3xl transition-all duration-150 ease-linear hover:bg-orange-600 hover:scale-110'>
						Horror
					</button>
				</div>

				<div className=' flex justify-center gap-24 mb-10'>
					<div className=' bg-zinc-800 min-h-96 w-1/2 rounded-3xl'></div>
					<div className='bg-zinc-800 min-h-60 w-96 rounded-3xl'></div>
				</div>
				<div className='flex justify-start ml-64 mb-10'>
					<h3 className='text-3xl font-medium'>Special for you</h3>
				</div>
				<div className='flex justify-center gap-20'>
					<div>
						<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5'></div>
						<div className='flex justify-between'>
							<div>FilmName</div>
							<div className='flex gap-10'>
								<span>Year</span>
								<span>rating</span>
							</div>
						</div>
					</div>
					<div>
						<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5'></div>
						<div className='flex justify-between'>
							<div>FilmName</div>
							<div className='flex gap-10'>
								<span>Year</span>
								<span>rating</span>
							</div>
						</div>
					</div>
					<div>
						<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5'></div>
						<div className='flex justify-between'>
							<div>FilmName</div>
							<div className='flex gap-10'>
								<span>Year</span>
								<span>rating</span>
							</div>
						</div>
					</div>
					<div>
						<div className='w-72 h-40 bg-zinc-800 rounded-3xl mb-5'></div>
						<div className='flex justify-between'>
							<div>FilmName</div>
							<div className='flex gap-10'>
								<span>Year</span>
								<span>rating</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}

export default App
