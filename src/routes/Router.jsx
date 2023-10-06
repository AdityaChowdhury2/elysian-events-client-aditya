import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorElement from '../pages/ErrorElement/ErrorElement';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/blog',
				element: <Home />,
			},
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

export default Router;
