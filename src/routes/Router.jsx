import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorElement from '../pages/ErrorElement/ErrorElement';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';
import EventDetails from '../pages/EventDetails/EventDetails';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile/Profile';
import Blogs from '../pages/Blogs/Blogs';
import BlogDetails from '../pages/BlogDetails/BlogDetails';

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
				element: <Blogs />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/event/:eventId',
				element: (
					<PrivateRoute>
						<EventDetails />
					</PrivateRoute>
				),
			},
			{
				path: '/profile/:userId',
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: '/blog/:blogId',
				element: (
					<PrivateRoute>
						<BlogDetails />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default Router;
