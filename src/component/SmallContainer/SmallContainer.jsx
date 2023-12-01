import PropTypes from 'prop-types';

const SmallContainer = ({ children }) => {
	return (
		<div className="flex justify-center items-center h-[30vh]">{children}</div>
	);
};

SmallContainer.propTypes = {
	children: PropTypes.node,
};

export default SmallContainer;
