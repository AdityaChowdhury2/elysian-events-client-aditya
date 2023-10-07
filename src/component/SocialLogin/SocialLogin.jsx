import { BsGoogle } from 'react-icons/bs';
import useAuthData from '../../hooks/useAuthData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	const { googleSignIn } = useAuthData();
	const navigate = useNavigate();
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
				className="flex justify-center gap-4 items-center border-2 border-primary-color rounded-3xl text-primary-color hover:text-light hover:bg-primary-color hover:cursor-pointer duration-500 hover:bg-opacity-90 hover:border-transparent py-2"
			>
				<BsGoogle /> Google
			</div>
		</>
	);
};

export default SocialLogin;
