import { Helmet } from 'react-helmet-async';
import PageHeader from '../../component/PageHeader/PageHeader';

const Contact = () => {
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Contact</title>
			</Helmet>
			<PageHeader title="Talk to Us" page="Contact" />
		</div>
	);
};

export default Contact;
