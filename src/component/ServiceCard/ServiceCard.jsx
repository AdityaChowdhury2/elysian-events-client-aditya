import PropTypes from 'prop-types';

const ServiceCard = ({ event }) => {
	const { id, name, image, price, short_description } = event || {};
	console.log(id, name, image, price, short_description);
	return (
		<>
			<div
				data-aos="flip-left"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="2000"
				data-aos-easing="ease-in-out"
				data-aos-anchor-placement="top-center"
				className="card shadow-xl glass"
			>
				<figure className="">
					<img src={image} alt={name} className="h-56 w-full" />
				</figure>

				<div className="card-body text-gray-dark">
					<h2 className="card-title">{name}</h2>
					<p className="">{short_description}</p>
					<button className="w-full bg-primary-dark text-light px-5 rounded-md py-2">
						Book Now
					</button>
				</div>
			</div>
		</>
	);
};

ServiceCard.propTypes = {
	event: PropTypes.object.isRequired,
};

export default ServiceCard;
