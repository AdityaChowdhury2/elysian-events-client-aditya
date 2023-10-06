import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorElement from '../pages/ErrorElement/ErrorElement';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorElement />,
		children: [{}],
	},
]);

export default Router;
