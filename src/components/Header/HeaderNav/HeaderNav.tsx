import { NavLink } from 'react-router'
import { PATH } from '../../../app/path'
import historyIcon from '../../../assets/icons/history.svg'
import homeIcon from '../../../assets/icons/homepage.svg'
import searchIcon from '../../../assets/icons/search.svg'
import settingsIcon from '../../../assets/icons/settings.svg'

const NavTitles = [
	{ id: 1, title: 'home', icon: homeIcon, path: PATH.HOME_PAGE },
	{ id: 2, title: 'settings', icon: settingsIcon, path: PATH.HOME_PAGE },
	{ id: 3, title: 'history', icon: historyIcon, path: PATH.HOME_PAGE },
	{ id: 4, title: 'search', icon: searchIcon, path: PATH.HOME_PAGE },
]

export const HeaderNav = () => {
	return (
		<ul className='h-1/2 flex flex-col justify-between mt-5 items-center'>
			{NavTitles.map(nt => (
				<li key={nt.id} className='transition-colors hover:text-amber-600'>
					<NavLink to={nt.path}>
						<img src={nt.icon} alt='icon' className='w-12 ' />
					</NavLink>
				</li>
			))}
		</ul>
	)
}
