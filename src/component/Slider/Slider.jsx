import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Slider = () => {
	const [sliderData, setSliderData] = useState(null);
	useEffect(() => {
		fetch('/sliderData.json')
			.then(res => res.json())
			.then(data => setSliderData(data));
	}, []);

	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				{sliderData?.map(slider => (
					<SwiperSlide key={slider.id}>
						<div
							style={{ backgroundImage: `url("${slider.bgImage}")` }}
							className={`bg-cover bg-center p-4 md:p-20 bg-gray bg-opacity-80 h-[700px]  flex justify-center items-center bg-blend-overlay `}
						>
							<div className="max-w-7xl mx-auto space-y-8">
								<h1 className="font-dela-gothic bg-gradient-to-tr from-primary-color to-light text-transparent bg-clip-text text-center text-xl md:text-6xl leading-relaxed">
									{slider.title}
								</h1>
								<h3 className="text-light md:text-4xl text-lg font-cedarville-cursive text-center">
									{slider.subtitle}
								</h3>
								<p className="text-light  text-center text-sm md:text-lg">
									{slider.description}
								</p>
								<div className="flex justify-center">
									<button className="bg-primary-color  hover:bg-primary-dark  text-light px-5 rounded-md py-2 flex items-center gap-2">
										Book Now <BsArrowRight />
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
