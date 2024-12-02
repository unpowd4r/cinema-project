import { Outlet } from 'react-router'
import { Header } from './components/Header'
import './index.css'

export function App() {
	return (
		<div className='min-h-screen pb-10'>
			<Header />
			<Outlet />
		</div>
	)
}
