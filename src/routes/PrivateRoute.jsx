import PropTypes from 'prop-types';
import useAuthData from '../hooks/useAuthData';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuthData();
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex items-center justify-center h-[30vh]">
				<span className="loading loading-spinner loading-lg text-orange-500"></span>
			</div>
		);
	}
	if (user) {
		return children;
	} else return <Navigate to={'/login'} state={location.pathname} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
