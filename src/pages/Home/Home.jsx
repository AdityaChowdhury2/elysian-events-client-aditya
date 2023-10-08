import { Helmet } from 'react-helmet-async';
import Slider from '../../component/Slider/Slider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard/ServiceCard';
import useAuthData from '../../hooks/useAuthData';
import CountUp from 'react-countup';
import './Home.css';
import SectionHeading from '../../component/SectionHeading/SectionHeading';

const Home = () => {
	const events = useLoaderData();
	const { user } = useAuthData();
	console.log(user);

	return (
		<div>
			<Helmet>
				<title>Elysian Events | Home</title>
			</Helmet>

			<Slider />

			<section className="my-16">
				<SectionHeading title="Services" />
				<div className="bg-service py-20 bg-center bg-no-repeat bg-cover">
					<div className="container ">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-3">
							{events.map(event => (
								<ServiceCard key={event.id} event={event} />
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="mb-16">
				<SectionHeading title="Stats" />
				<div className="bg-stats py-40 bg-center bg-no-repeat bg-cover bg-neutral-700 bg-blend-overlay bg-opacity-90">
					<div className="container grid grid-cols-1 md:grid-cols-4 text-orange-50">
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={320}
									delay={5}
									enableScrollSpy
									duration={3.75}
								>
									{({ countUpRef }) => (
										<div>
											<span ref={countUpRef} />
										</div>
									)}
								</CountUp>
							</h2>
							<p>Featured Events</p>
						</div>
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={156}
									delay={5}
									enableScrollSpy
									duration={3.75}
								>
									{({ countUpRef }) => (
										<div>
											<span ref={countUpRef} />
										</div>
									)}
								</CountUp>
							</h2>
							<p>Loyal Customers</p>
						</div>
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={594}
									delay={2}
									enableScrollSpy
									duration={3.75}
								>
									{({ countUpRef }) => (
										<div>
											<span ref={countUpRef} />
										</div>
									)}
								</CountUp>
							</h2>
							<p>Good Comments</p>
						</div>
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={167}
									delay={5}
									enableScrollSpy
									duration={3.75}
								>
									{({ countUpRef }) => (
										<div>
											<span ref={countUpRef} />
										</div>
									)}
								</CountUp>
							</h2>
							<p>Trophies Won</p>
						</div>
					</div>
				</div>
			</section>

			<section className="gallery bg-orange-50">
				<SectionHeading title="Gallery" />
				<swiper-container
					class="mySwiper"
					pagination="true"
					effect="coverflow"
					grab-cursor="true"
					centered-slides="true"
					slides-per-view="auto"
					autoplay-delay="1500"
					space-between="100"
					autoplay-disable-on-interaction="false"
					coverflow-effect-rotate="50"
					coverflow-effect-stretch="0"
					coverflow-effect-depth="100"
					coverflow-effect-modifier="1"
					coverflow-effect-slide-shadows="true"
				>
					<swiper-slide lazy="true">
						<div>
							<img src="https://i.ibb.co/pnd3RfL/fd62d5e73c.jpg" />
						</div>
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/R2XpYBT/wedding-2595862-1280.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/56dvZ1P/wedding.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/GQrwKc5/houseparty.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/s2h668T/birthday-celebrations-with-screaming-friends.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/Xz30yVK/graduation.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/fdYqrQm/anniversary.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/xHFMH6K/a7fe7b0870.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/cx3PQRL/6b5196adce.jpg" />
					</swiper-slide>
					<swiper-slide lazy="true">
						<img src="https://i.ibb.co/BVfWJq9/4bd97e731a.jpg" />
					</swiper-slide>
				</swiper-container>
			</section>
		</div>
	);
};

export default Home;
