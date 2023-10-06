import { Outlet } from 'react-router-dom';
import Header from '../component/Headerl/Header';

const MainLayout = () => {
	return (
		<div className="font-poppins text-gray">
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;
