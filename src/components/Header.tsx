import logoutIcon from '../assets/icons/logout.svg'
import { HeaderNav } from './Header/HeaderNav/HeaderNav'

export const Header = () => {
	return (
		<>
			<nav className='fixed top-0 left-0 h-full w-44 overflow-x-hidden z-10 bg-zinc-800 text-white flex flex-col justify-between items-center pt-5'>
				<HeaderNav />
				<div className='pb-5'>
					<a className='transition-colors hover:text-amber-600' href='#'>
						<img src={logoutIcon} alt='logout' className='w-12' />
					</a>
				</div>
			</nav>
			<header className='ml-20 pt-10 absolute top-0 right-0 left-44 flex items-start '>
				<h1 className=' text-blue-50 font-medium'>My cinema</h1>
			</header>
		</>
	)
}
