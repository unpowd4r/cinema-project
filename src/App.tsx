import { FilmPage } from './components/FilmPage/FilmPage'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage/HomePage'
import './index.css'

function App() {
	return (
		<div className='min-h-screen pb-10'>
			<Header />
			<FilmPage />
			<HomePage />
		</div>
	)
}

export default App
