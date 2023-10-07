import { useState } from 'react';
import useAuthData from '../../hooks/useAuthData';
import userImage from '/user.svg';

const Profile = () => {
	const { user } = useAuthData();
	const [userProfile, setUserProfile] = useState(user);
	return (
		<>
			<h3 className="text-center font-bold text-2xl">Edit Profile</h3>
			<form>
				<div className="grid grid-cols-1 lg:grid-cols-5 container lg:gap-8 my-12">
					<div className="space-y-4 flex flex-col justify-center items-center">
						<img
							src={userProfile?.photoURL || userImage}
							alt=""
							className="w-44 avatar rounded-full border-4"
						/>

						<input
							type="file"
							className="file-input file-input-accent file-input-sm w-full max-w-xs"
						/>
					</div>
					<div className="col-span-2">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={userProfile?.displayName || ''}
								className="input input-bordered"
								onChange={e =>
									setUserProfile({
										...userProfile,
										displayName: e.target.value,
									})
								}
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								value={userProfile?.email || ''}
								readOnly
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Facebook Username</span>
							</label>
							<input
								type="text"
								name="facebook-username"
								placeholder="www.facebook.com/"
								className="input input-bordered"
							/>
						</div>
					</div>
					<div className="col-span-2">
						<div className="form-control">
							<label className="label">
								<span className="label-text">X Username</span>
							</label>
							<input
								type="text"
								name="x-username"
								placeholder="www.twitter.com/"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="newPassword"
								placeholder="New Password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								className="input input-bordered"
								required
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-center mb-12">
					<button className="bg-primary-color hover:bg-primary-dark text-light px-3 py-2 rounded-md">
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default Profile;
