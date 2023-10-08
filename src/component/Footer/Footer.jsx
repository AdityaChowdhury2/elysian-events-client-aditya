import Logo from '../Logo/Logo';
import AOS from 'aos'; // You can also use <link> for styles
// ..
AOS.init();
const Footer = () => {
	return (
		<div className="bg-neutral-600  text-orange-50">
			<footer className="footer p-10 container">
				<aside>
					<Logo />
					<p>
						Elysian Events
						<br />
						Providing reliable tech since 1998
					</p>
				</aside>
				<nav>
					<header className="footer-title">Services</header>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<header className="footer-title">Company</header>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<header className="footer-title">Legal</header>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
