import { Helmet } from 'react-helmet-async';
import Slider from '../../component/Slider/Slider';

import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard/ServiceCard';
import useAuthData from '../../hooks/useAuthData';

const Home = () => {
	const events = useLoaderData();
	const { user } = useAuthData();
	// console.log(events);
	console.log(user);
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Home</title>
			</Helmet>

			<Slider />

			<section className="my-16">
				<h3
					className="font-medium text-4xl text-center"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-anchor-placement="top-center"
				>
					Our
					<span className="text-primary-color "> Services</span>
					<div className="mx-auto h-1 mt-10 mb-12 bg-primary-color w-28"></div>
				</h3>

				<div className="bg-service py-20 bg-no-repeat bg-cover">
					<div className="container ">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-3">
							{events.map(event => (
								<ServiceCard key={event.id} event={event} />
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
