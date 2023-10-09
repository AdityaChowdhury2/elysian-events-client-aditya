import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
	return (
		<div className="font-poppins text-gray-600 bg-orange-50">
			<Header />
			<Outlet />
			<Footer />
			<Toaster position="top-center" />
		</div>
	);
};

export default MainLayout;
