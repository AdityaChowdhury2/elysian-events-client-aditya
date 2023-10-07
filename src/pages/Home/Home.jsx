import { Helmet } from 'react-helmet-async';
import Slider from '../../component/Slider/Slider';

import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard/ServiceCard';
import useAuthData from '../../hooks/useAuthData';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Home = () => {
	const events = useLoaderData();
	const { user } = useAuthData();
	// console.log(events);
	console.log(user);
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Home</title>
			</Helmet>

			<Slider />

			<section className="my-16">
				<h3
					className="font-medium text-4xl text-center"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-anchor-placement="top-bottom"
				>
					Our
					<span className="text-primary-color "> Services</span>
					<div className="mx-auto h-1 mt-10 mb-12 bg-primary-color w-28"></div>
				</h3>

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
				<h3
					className="font-medium text-4xl text-center"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-anchor-placement="top-bottom"
				>
					Stats
					<div className="mx-auto h-1 mt-10 mb-12 bg-primary-color w-28"></div>
				</h3>
				<div className="bg-stats py-20 bg-center bg-no-repeat bg-cover bg-gray bg-blend-overlay bg-opacity-90">
					<div className="container grid grid-cols-1 md:grid-cols-4 text-light">
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={320}
									delay={5}
									enableScrollSpy
									duration={3.75}
								/>
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
								/>
							</h2>
							<p>Loyal Customers</p>
						</div>
						<div className="text-center">
							<h2 className="font-dela-gothic py-5 text-4xl">
								<CountUp
									start={10}
									end={594}
									delay={5}
									enableScrollSpy
									duration={3.75}
								/>
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
								/>
							</h2>
							<p>Trophies Won</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				{' '}
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					autoplay={{ disableOnInteraction: false, delay: 2000 }}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[Autoplay]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/pnd3RfL/fd62d5e73c.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/0h7f7Hd/festive.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/R2XpYBT/wedding-2595862-1280.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/56dvZ1P/wedding.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/GQrwKc5/houseparty.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/s2h668T/birthday-celebrations-with-screaming-friends.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/Xz30yVK/graduation.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/fdYqrQm/anniversary.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://i.ibb.co/xHFMH6K/a7fe7b0870.jpg"
							className="h-[1024px] w-[1024px]"
						/>
					</SwiperSlide>
				</Swiper>
			</section>
		</div>
	);
};

export default Home;
