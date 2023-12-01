import { Helmet } from 'react-helmet-async';
import RegistrationImage from './registration.svg';
import SocialLogin from '../../component/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';

import useAuthData from '../../hooks/useAuthData';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
	const { createUser } = useAuthData();
	const navigate = useNavigate();
	const [isEyesOpen, setIsEyesOpen] = useState(true);
	const handleRegister = async e => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userData = {};
		for (const data of formData.entries()) {
			userData[data[0]] = data[1];
		}
		const { password } = userData;
		if (password.length < 6) {
			return toast.error('Password must be at least 6 characters');
		}
		if (/^[^!@#$%^&*]*$/.test(password)) {
			return toast.error('Please add at least one Special character');
		}
		if (/^[^A-Z]*$/.test(password)) {
			return toast.error('Please add at least one capital letter');
		}
		createUser(userData)
			.then(res => {
				navigate(location.state || '/');
				console.log(res.user);
				toast.success('User created successfully');
			})
			.catch(err => {
				console.log(err.message);
				toast.error('Please Try Again Later');
			});
		await axios.patch(`/user/${userData.email}`, userData);
	};
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Register</title>
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
						<form onSubmit={handleRegister} className="card-body space-y-4">
							<h4 className="text-center font-bold text-orange-500 ">
								Registration
							</h4>

							<div className="relative h-11  w-full min-w-[200px]">
								<input
									type="text"
									name="name"
									className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-orange-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Name
								</label>
							</div>
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
									type={`${isEyesOpen ? 'password' : 'text'}`}
									name="password"
									className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-orange-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Password
								</label>
								<div
									onClick={() => setIsEyesOpen(!isEyesOpen)}
									className="absolute right-2 top-1/3 hover:cursor-pointer"
								>
									{isEyesOpen ? <BsEye /> : <BsEyeSlash />}
								</div>
							</div>
							<div className="form-control mt-6">
								<button className="bg-orange-500 hover:bg-orange-600 py-2 rounded-md text-gray-100">
									Register
								</button>
							</div>
							<SocialLogin />
							<p className="text-sm text-center mt-4">
								Already have an Account?{' '}
								<Link to="/login" className="text-orange-500">
									Sign in
								</Link>
							</p>
						</form>
					</div>
					<div className="w-1/3">
						<img src={RegistrationImage} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
