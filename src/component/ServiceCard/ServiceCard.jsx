import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ event }) => {
	const { _id, name, image, short_description, price } = event || {};

	return (
		<>
			<div
				data-aos="flip-left"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-anchor-placement="top-bottom"
				className="card shadow-xl glass"
			>
				<figure className="">
					<img src={image} alt={name} className="h-56 w-full" />
				</figure>

				<div className="card-body text-gray-800">
					<h2 className="card-title">{name}</h2>
					<p className="">{short_description}</p>
					<p>Price: &#2547;{price}</p>
					<Link to={`/event/${_id}`}>
						<button className="w-full bg-orange-600 text-orange-50 px-5 rounded-md py-2">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

ServiceCard.propTypes = {
	event: PropTypes.object.isRequired,
};

export default ServiceCard;
