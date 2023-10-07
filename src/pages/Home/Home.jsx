import { Helmet } from 'react-helmet-async';
import Slider from '../../component/Slider/Slider';

import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard/ServiceCard';

const Home = () => {
	const events = useLoaderData();
	console.log(events);
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
					data-aos-delay="800"
					data-aos-easing="ease"
				>
					Our
					<span className="text-primary-color "> Services</span>
					<div className="mx-auto h-1 mt-10 mb-12 bg-primary-color w-28"></div>
				</h3>

				<div className="bg-service py-20 ">
					<div className="container ">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
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
