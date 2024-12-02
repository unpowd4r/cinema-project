import { NavLink } from 'react-router'
import { PATH } from '../../../app/path'
import historyIcon from '../../../assets/icons/history.svg'
import homeIcon from '../../../assets/icons/homepage.svg'
import profileIcon from '../../../assets/icons/profile.svg'
import searchIcon from '../../../assets/icons/search.svg'
import settingsIcon from '../../../assets/icons/settings.svg'

const NavTitles = [
	{ id: 1, title: 'home', icon: homeIcon, path: PATH.START_PAGE },
	{ id: 2, title: 'profile', icon: profileIcon },
	{ id: 3, title: 'settings', icon: settingsIcon },
	{ id: 4, title: 'history', icon: historyIcon },
	{ id: 5, title: 'search', icon: searchIcon },
]

export const HeaderNav = () => {
	return (
		<ul className='h-1/2 flex flex-col justify-between mt-5 items-center'>
			{NavTitles.map(nt => (
				<li key={nt.id} className='transition-colors hover:text-amber-600'>
					{nt.path ? (
						<NavLink to={nt.path}>
							<img src={nt.icon} alt='icon' className='w-12 ' />
						</NavLink>
					) : (
						<img src={nt.icon} alt='icon' className='w-12 ' />
					)}
				</li>
			))}
		</ul>
	)
}
