import { Helmet } from 'react-helmet-async';
import RegistrationImage from './registration.svg';
import SocialLogin from '../../component/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthData from '../../hooks/useAuthData';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

const Register = () => {
	const { createUser } = useAuthData();
	const [isEyesOpen, setIsEyesOpen] = useState(true);
	const handleRegister = e => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const userData = {};
		for (const data of formData.entries()) {
			userData[data[0]] = data[1];
		}
		const { email, name, password } = userData;
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
				console.log(res.user);
				toast.success('User created successfully');
			})
			.catch(err => {
				console.log(err.message);
				toast.error('Please Try Again Later');
			});
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
							<h4 className="text-center font-bold text-primary-color ">
								Registration
							</h4>

							<div className="relative h-11  w-full min-w-[200px]">
								<input
									type="text"
									name="name"
									className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-primary-color focus:outline-0"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-color after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-color peer-focus:after:scale-x-100 peer-focus:after:border-primary-color peer-disabled:text-transparent peer-disabled">
									Name
								</label>
							</div>
							<div className="relative h-11  w-full min-w-[200px]">
								<input
									type="email"
									name="email"
									className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-primary-color focus:outline-0"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-color after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-color peer-focus:after:scale-x-100 peer-focus:after:border-primary-color peer-disabled:text-transparent peer-disabled">
									Email
								</label>
							</div>

							<div className="relative h-11 w-full min-w-[200px]">
								<input
									type={`${isEyesOpen ? 'password' : 'text'}`}
									name="password"
									className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-primary-color focus:outline-0"
									placeholder=" "
									required
								/>
								<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-color after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-color peer-focus:after:scale-x-100 peer-focus:after:border-primary-color peer-disabled:text-transparent peer-disabled">
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
								<button className="bg-primary-color hover:bg-primary-dark py-2 rounded-md text-light">
									Register
								</button>
							</div>
							<SocialLogin />
							<p className="text-sm text-center mt-4">
								Already have an Account?{' '}
								<Link to="/login" className="text-primary-color">
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
