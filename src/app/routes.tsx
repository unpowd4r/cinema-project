import { createBrowserRouter } from 'react-router'
import { App } from '../App'
import { FilmPage } from '../components/FilmPage/FilmPage'
import { HomePage } from '../components/HomePage/HomePage'
import { PATH } from './path'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: `${PATH.HOME_PAGE}`,
				element: <HomePage />,
			},

			{
				path: `${PATH.FILM_PAGE}/:id`,
				element: <FilmPage />,
			},
		],
	},
])
