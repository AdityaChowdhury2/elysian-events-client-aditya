import { Helmet } from 'react-helmet-async';
import Slider from '../../component/Slider/Slider';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Home</title>
			</Helmet>
			<Slider />
		</div>
	);
};

export default Home;
