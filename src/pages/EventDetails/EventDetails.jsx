import { useParams } from 'react-router-dom';
// import useAuthData from '../../hooks/useAuthData';
import useSingleEventById from '../../hooks/useSingleEventById';
import SmallContainer from '../../component/SmallContainer/SmallContainer';

const EventDetails = () => {
	const { eventId } = useParams();
	// const { user } = useAuthData();
	// console.log(eventId);
	const {
		event: singleEvent,
		isError,
		isLoading,
		// refetch,
	} = useSingleEventById(eventId);

	const { image, name, long_description, price, features } = singleEvent || {};

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center h-[30vh]">
					<span className="loading loading-spinner loading-lg text-orange-500"></span>
				</div>
			) : isError ? (
				<SmallContainer>
					<p className="text-red-500 font-bold text-2xl">No data found</p>
				</SmallContainer>
			) : (
				<>
					<h2 className="font-bold text-center text-4xl mt-12 mb-3">{name}</h2>
					<div className="h-1 bg-orange-500 w-44 mx-auto mb-12"></div>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className="bg-cover h-[600px] bg-no-repeat text-orange-100 bg-center bg-gray-800 bg-blend-overlay bg-opacity-90 my-20"
					>
						<div className="backdrop-blur-sm">
							<div className="container flex p-4 flex-col-reverse md:flex-row items-center gap-4 h-[600px]">
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
									<p className="max-w-xl text-xl bg-gradient-to-tr from-orange-500 to-orange-100 bg-clip-text text-transparent text-justify">
										{long_description}
									</p>
									<p className="mt-3">
										Price:{' '}
										<span className="text-orange-500 my-4 font-bold">
											{price}Tk
										</span>
									</p>
									<button className="bg-orange-500 hover:bg-orange-600 py-1 mt-3 px-3 rounded-md">
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
