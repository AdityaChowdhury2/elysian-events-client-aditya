import { Helmet } from 'react-helmet-async';
import PageHeader from '../../component/PageHeader/PageHeader';

const About = () => {
	return (
		<div>
			<Helmet>
				<title>Elysian Events | About</title>
			</Helmet>
			<PageHeader title="Contact Us" page="About" />
		</div>
	);
};

export default About;
