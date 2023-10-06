import { NavLink } from 'react-router-dom';
import Logo from '/logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';

const Header = () => {
	const navLinks = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) => {
						isActive ? 'font-bold' : '';
					}}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/blog'}
					className={({ isActive }) => {
						isActive ? 'font-bold' : '';
					}}
				>
					Blog
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/about'}
					className={({ isActive }) => {
						isActive ? 'font-bold' : '';
					}}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/contact'}
					className={({ isActive }) => {
						isActive ? 'font-bold' : '';
					}}
				>
					Contact
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/login'}
					className={({ isActive }) => {
						isActive ? 'font-bold' : '';
					}}
				>
					Login
				</NavLink>
			</li>
		</>
	);
	return (
		<>
			<div className=" container navbar ">
				<div className="navbar-start">
					<img src={Logo} alt="" className="w-32" />
				</div>

				<div className="navbar-end ">
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1">{navLinks}</ul>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<HiMenuAlt3 size={24} />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
