import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
	return (
		<div className="font-poppins text-gray-600 bg-orange-50">
			<Header />
			<Outlet />
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default MainLayout;
