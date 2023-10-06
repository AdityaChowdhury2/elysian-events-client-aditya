import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import ErrorAnimation from '../../assets/Error.json';

const ErrorElement = () => {
	return (
		<div>
			<div className="grid h-screen px-4 bg-white place-content-center">
				<div>
					<Lottie animationData={ErrorAnimation} loop={true} />
				</div>
				<div className="text-center">
					<h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Uh-oh!
					</h1>

					<p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
					<Link
						to={'/'}
						className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
					>
						Go Back Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorElement;
