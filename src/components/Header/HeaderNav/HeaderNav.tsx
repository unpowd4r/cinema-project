import { NavLink } from 'react-router'
import { PATH } from '../../../app/path'

const NavTitles = [
	{ id: 1, title: 'home', path: PATH.START_PAGE },
	{ id: 2, title: 'profile' },
	{ id: 3, title: 'settings' },
	{ id: 4, title: 'history' },
	{ id: 5, title: 'search' },
]

export const HeaderNav = () => {
	return (
		<ul className='h-1/2 flex flex-col justify-between mt-5 items-center'>
			{NavTitles.map(nt => (
				<li key={nt.id} className='transition-colors hover:text-amber-600'>
					{nt.path ? (
						<NavLink to={nt.path}>{nt.title}</NavLink>
					) : (
						<a href='#'>{nt.title}</a>
					)}
				</li>
			))}
		</ul>
	)
}
