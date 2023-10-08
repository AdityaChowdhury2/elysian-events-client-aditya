import { Helmet } from 'react-helmet-async';
import LoginImage from './login.svg';

import SocialLogin from '../../component/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuthData from '../../hooks/useAuthData';
import { toast } from 'react-toastify';

const Login = () => {
	const { signIn } = useAuthData();
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location);

	const handleLogin = e => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userData = {};
		for (const data of formData.entries()) {
			userData[data[0]] = data[1];
		}
		console.log(userData);
		signIn(userData)
			.then(res => {
				navigate(location.state || '/');
				console.log(res.user);
				toast.success('স্বাগতম');
			})
			.catch(err => {
				console.log(err.message);
				toast.error('Could not match user Password and Email');
			});
	};

	return (
		<div>
			<Helmet>
				<title>Elysian Events | Login</title>
			</Helmet>
			<div className="hero min-h-[70vh] bg-base-200">
				<div className="hero-content justify-between flex-col-reverse gap-8 lg:flex-row">
					<div
						data-aos="fade-down"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					>
						<form onSubmit={handleLogin} className="card-body space-y-4">
							<h4 className="text-center font-bold text-orange-500 ">Login</h4>

							<div className="relative h-11  w-full min-w-[200px]">
								<input
									type="email"
									name="email"
									className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-orange-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Email
								</label>
							</div>

							<div className="relative h-11 w-full min-w-[200px]">
								<input
									type="password"
									name="password"
									className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-orange-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Password
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="bg-orange-500 hover:bg-orange-600 py-2 rounded-md text-orange-50"
								>
									Login
								</button>
							</div>
							<SocialLogin />
							<p className="text-sm text-center mt-4">
								Don&apos;t have an Account?{' '}
								<Link to="/register" className="text-orange-500">
									Create Account
								</Link>
							</p>
						</form>
					</div>
					<div className="w-1/3">
						<img src={LoginImage} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
