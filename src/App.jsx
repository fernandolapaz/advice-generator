import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '*',
			element: <NoPage />,
		},
	])

	return <RouterProvider router={router} />
}
