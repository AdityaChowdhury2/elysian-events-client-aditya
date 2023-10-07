import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const EventDetails = () => {
	const [singleEvent, setSingleEvent] = useState(null);
	const [loading, setLoading] = useState(true);
	const { eventId } = useParams();
	const eventData = useLoaderData();

	useEffect(() => {
		const event = eventData?.find(event => event.id === parseInt(eventId));
		setSingleEvent(event);
		setLoading(false);
	}, [eventData, eventId]);
	console.log(singleEvent);
	const { id, image, name, long_description, price, features } =
		singleEvent || {};

	return (
		<>
			{loading ? (
				<div className="flex items-center justify-center h-[30vh]">
					<span className="loading loading-spinner loading-lg text-primary-color"></span>
				</div>
			) : (
				<>
					<h2 className="font-bold text-center text-4xl mt-12 mb-3">{name}</h2>
					<div className="h-1 bg-primary-color w-44 mx-auto mb-12"></div>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className="bg-cover h-[600px] bg-no-repeat text-light bg-center bg-gray bg-blend-overlay bg-opacity-90 my-20"
					>
						<div className="backdrop-blur-sm">
							<div className="container flex md:flex-row p-4 flex-col-reverse items-center gap-4 h-[600px]">
								<div className="flex flex-col  w-full md:w-1/2 items-center">
									<ul className="space-y-2 px-3 text-sm md:text-base list-image-checkMark">
										{features.map((feature, _id) => (
											<li key={_id} className="">
												{feature}
											</li>
										))}
									</ul>
								</div>
								<div className="md:w-1/2">
									<p className="max-w-xl text-xl bg-gradient-to-tr from-primary-color to-gray-light bg-clip-text text-transparent text-justify">
										{long_description}
									</p>
									<p className="mt-3">
										Price:{' '}
										<span className="text-primary-color my-4">{price}Tk</span>
									</p>
									<button className="bg-primary-color py-1 mt-3 px-3 rounded-md">
										Book Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default EventDetails;
