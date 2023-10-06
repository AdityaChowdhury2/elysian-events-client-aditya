import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
	return (
		<div className="font-poppins text-gray bg-light">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
