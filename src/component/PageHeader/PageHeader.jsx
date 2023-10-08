import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const PageHeader = ({ title }) => {
	const location = useLocation();
	return (
		<>
			<div className="bg-header bg-cover bg-no-repeat bg-center bg-gray-700 bg-blend-overlay py-20">
				<h2 className="text-orange-50 font-dela-gothic text-6xl py-5 text-center ">
					{title}
				</h2>
				<div className="text-sm breadcrumbs flex justify-center">
					<ul>
						<li className="text-orange-500 font-medium">
							<Link to={'/'}>Home</Link>
						</li>
						<li className="text-orange-50 capitalize">
							{location.pathname.split('/')[1]}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageHeader;
