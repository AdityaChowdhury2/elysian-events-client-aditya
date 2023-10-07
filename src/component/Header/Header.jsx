import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import Logo from '../Logo/Logo';
import useAuthData from '../../hooks/useAuthData';
import userProfile from '/user.svg';
const Header = () => {
	const { user, logOut } = useAuthData();
	const handleLogout = () => {
		logOut().then(() => {
			console.log('user logged out');
		});
	};
	const navLinks = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'text-primary-color' : '')}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/blog'}
					className={({ isActive }) => (isActive ? 'text-primary-color ' : '')}
				>
					Blog
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/about'}
					className={({ isActive }) => (isActive ? 'text-primary-color ' : '')}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/contact'}
					className={({ isActive }) => (isActive ? 'text-primary-color ' : '')}
				>
					Contact
				</NavLink>
			</li>
			{user ? (
				<>
					<div className="dropdown dropdown-end">
						<label tabIndex={2} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src={user?.photoURL || userProfile} />
							</div>
						</label>
						<ul
							tabIndex={2}
							className="mt-3 z-10 p-4 shadow flex flex-col gap-2 dropdown-content bg-base-100 rounded-box w-40"
						>
							<li>
								<Link
									to={`/profile/${user?.uid}`}
									className="justify-between cursor-pointer"
								>
									Profile
									<span className="badge">New</span>
								</Link>
							</li>
							<li>
								<a onClick={handleLogout} className="cursor-pointer">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</>
			) : (
				<li>
					<NavLink
						to={'/login'}
						className={({ isActive }) =>
							isActive ? 'text-primary-color ' : ''
						}
					>
						Login
					</NavLink>
				</li>
			)}
		</>
	);
	return (
		<>
			<div className=" container navbar ">
				<div className="navbar-start">
					<Logo />
				</div>

				<div className="navbar-end ">
					<div className="hidden lg:flex ">
						<ul className="flex gap-6 px-1 lg:items-center">{navLinks}</ul>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<HiMenuAlt3 size={24} />
						</label>
						<ul
							tabIndex={0}
							className="flex flex-col dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52 gap-2 hover:bg-base-100 focus:bg-base-100 active:bg-base-100"
						>
							{navLinks}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
