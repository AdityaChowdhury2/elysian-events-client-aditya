import { BsGoogle } from 'react-icons/bs';
import useAuthData from '../../hooks/useAuthData';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	const { googleSignIn } = useAuthData();
	const navigate = useNavigate();
	const location = useLocation();
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(res => {
				console.log(res.user);
				navigate(location.state || '/');
				toast.success('Login Successful');
			})
			.catch(err => {
				console.log(err.message);
				toast.error('Please Try Again');
			});
	};
	return (
		<>
			<div className="divider">Or</div>
			<div
				onClick={handleGoogleSignIn}
				className="flex justify-center gap-4 items-center border-2 border-orange-500 rounded-3xl text-orange-500 hover:text-orange-50 hover:bg-orange-500 hover:cursor-pointer duration-500 hover:bg-opacity-90 hover:border-transparent py-2"
			>
				<BsGoogle /> Google
			</div>
		</>
	);
};

export default SocialLogin;
