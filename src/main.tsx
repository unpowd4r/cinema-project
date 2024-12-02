import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app/routes.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
