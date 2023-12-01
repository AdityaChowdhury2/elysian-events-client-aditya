import { useState } from 'react';
import useAuthData from '../../hooks/useAuthData';
import userImage from '/user.svg';
import toast from 'react-hot-toast';
import axios from 'axios';
import useGetUser from '../../hooks/useGetUser';

const Profile = () => {
	const [errMessage, setErrMessage] = useState('');
	const { user, setUser, updateNameAndDisplayPicture } = useAuthData();
	const [userProfile, setUserProfile] = useState({
		displayName: user?.displayName,
		email: user?.email,
		photoURL: user?.photoURL,
	});
	const { userDetails, refetch } = useGetUser();
	const convertToBase64 = imageFile => {
		const reader = new FileReader();

		reader.readAsDataURL(imageFile);
		return new Promise((resolve, reject) => {
			try {
				reader.onload = () => {
					const convertedImage = reader.result;
					resolve(convertedImage);
				};
			} catch (error) {
				reject(error);
			}
		});
	};

	const handleSubmit = async e => {
		try {
			e.preventDefault();
			const form = new FormData(e.currentTarget);
			const userObj = {};
			for (const data of form.entries()) {
				userObj[data[0]] = data[1];
			}
			const imageFile = userObj.userProfileImage;
			if (imageFile.size < 1000000) {
				const convertedImage = await convertToBase64(userObj.userProfileImage);
				const updatedUser = {
					displayName: userObj.displayName,
					userImage: convertedImage,
					email: userObj.email,
					fbUsername: userObj['facebook-username'],
					xUserName: userObj['x-username'],
				};
				setUserProfile({ ...userProfile, ...updatedUser });
				//set name to firebase
				await updateNameAndDisplayPicture({
					displayName: userObj.displayName,
				});
				setUser({ ...user, ...updatedUser });
				//send user details to mongodb database
				const response = await axios.patch(`/user/${userObj.email}`, {
					...updatedUser,
					photoURL: userProfile.photoURL,
				});
				console.log(response.data);
				toast.success('User updated successfully');
				refetch();
			} else {
				setErrMessage('File size should not be exceeded than 1Mb');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="p-4">
			<h3 className="text-center font-bold text-2xl">Edit Profile</h3>

			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 lg:grid-cols-5 container lg:gap-8 my-12">
					<div className="space-y-4 flex flex-col justify-center items-center">
						<div className="avatar ">
							<div className="w-44 h-44 rounded-full">
								<img
									draggable="false"
									src={
										userProfile?.photoURL ||
										userProfile?.userImage ||
										userDetails?.userImage ||
										userImage
									}
									className="pointer-events-none"
									alt=""
								/>
							</div>
						</div>
						{/* <FileBase64 onDone={getFiles} /> */}

						<input
							name="userProfileImage"
							type="file"
							accept="image/*"
							onChange={() => {
								setErrMessage('');
							}}
							className="file-input file-input-accent file-input-sm w-full max-w-xs"
						/>
						<p>
							{errMessage && (
								<span className="text-xs text-red-500">{errMessage}</span>
							)}
						</p>
					</div>

					<div className="col-span-2">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="displayName"
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
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">New Password</span>
							</label>
							<input
								disabled
								type="password"
								name="newPassword"
								placeholder="New Password"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								disabled
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								className="input input-bordered"
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-center mb-12">
					<button
						type="submit"
						className="bg-orange-500 hover:bg-orange-600 text-orange-50 px-3 py-2 rounded-md"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Profile;
