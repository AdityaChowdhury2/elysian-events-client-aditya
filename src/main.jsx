import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retryDelay: attemptIndex => {
				return Math.min(1000 * 2 ** attemptIndex, 30000);
			},
		},
		mutations: {
			retryDelay: attemptIndex => {
				return Math.min(1000 * 2 ** attemptIndex, 30000);
			},
		},
	},
});

axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.baseURL = 'https://elysian-events-server.vercel.app';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={Router} />
				</AuthProvider>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
);
