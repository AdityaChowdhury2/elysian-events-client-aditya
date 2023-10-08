import PropTypes from 'prop-types';

const SectionHeading = ({ title }) => {
	return (
		<div>
			<h3
				className="font-medium text-4xl text-center"
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-anchor-placement="top-bottom"
			>
				Our
				<span className="text-orange-500 "> {title}</span>
			</h3>
			<div className="mx-auto h-1 mt-10 mb-12 bg-orange-500 w-28"></div>
		</div>
	);
};

SectionHeading.propTypes = {
	title: PropTypes.string.isRequired,
};

export default SectionHeading;
