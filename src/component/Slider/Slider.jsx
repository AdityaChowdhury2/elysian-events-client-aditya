import { BsArrowRight } from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Slider = () => {
	const [sliderData, setSliderData] = useState(null);
	const swiperElRef = useRef(null);
	useEffect(() => {
		fetch('/sliderData.json')
			.then(res => res.json())
			.then(data => setSliderData(data));
	}, []);
	// useEffect(() => {
	// 	// listen for Swiper events using addEventListener
	// 	swiperElRef.current.addEventListener('progress', e => {
	// 		const [swiper, progress] = e.detail;
	// 		console.log(progress);
	// 	});

	// 	swiperElRef.current.addEventListener('slidechange', e => {
	// 		console.log('slide changed');
	// 	});
	// }, []);

	return (
		<>
			<swiper-container
				ref={swiperElRef}
				class="mySwiper"
				space-between="30"
				effect="fade"
				autoplay-delay="2500"
				autoplay-disable-on-interaction="false"
				loop="true"
			>
				{sliderData?.map(slider => (
					<swiper-slide key={slider.id}>
						<div
							style={{ backgroundImage: `url("${slider.bgImage}")` }}
							className={`bg-cover bg-center p-4 md:p-20 bg-gray-700 bg-opacity-80 h-[700px]  flex justify-center items-center bg-blend-overlay `}
						>
							<div className="max-w-7xl mx-auto space-y-8">
								<h1 className="font-dela-gothic bg-gradient-to-tr from-orange-500 to-orange-100 text-transparent bg-clip-text text-center text-xl md:text-6xl py-4">
									{slider.title}
								</h1>
								<h3 className="text-orange-50 md:text-4xl text-lg font-cedarville-cursive text-center">
									{slider.subtitle}
								</h3>
								<p className="text-orange-50  text-center text-sm md:text-lg">
									{slider.description}
								</p>
								<div className="flex justify-center">
									<button className="bg-orange-500  hover:bg-orange-600  text-orange-50 px-5 rounded-md py-2 flex items-center gap-2">
										Book Now <BsArrowRight />
									</button>
								</div>
							</div>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
		</>
	);
};

export default Slider;
