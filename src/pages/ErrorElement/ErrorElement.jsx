import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import ErrorAnimation from '../../assets/Error.json';
import { BsArrowLeft } from 'react-icons/bs';
import Header from '../../component/Header/Header';

const ErrorElement = () => {
	return (
		<div>
			<Header />
			<div className="grid px-4 bg-white place-content-center">
				<div>
					<Lottie animationData={ErrorAnimation} loop={true} />
				</div>
				<div className="text-center">
					<h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Uh-oh!
					</h1>

					<p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
					<div className="flex justify-center">
						<Link
							to={'/'}
							className="mt-6 text-sm font-medium   bg-orange-500  hover:bg-orange-600 text-orange-50 px-5 rounded-md py-2 flex items-center gap-2"
						>
							<BsArrowLeft />
							Go Back Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorElement;
