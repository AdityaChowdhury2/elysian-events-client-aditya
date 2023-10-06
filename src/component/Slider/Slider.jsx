import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

const Slider = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className='bg-[url("https://i.ibb.co/SfGKx3S/a7fe7b0870.jpg")] bg-cover bg-center h-[40vh]'>
						asdfassf asd fas d a
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-[url("https://i.ibb.co/rbx4y0w/fd62d5e73c.jpg")] bg-cover bg-center h-[40vh]'>
						asdfassf asd fas d a
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-[url("https://i.ibb.co/ww5Bm3v/wedding-2595862-1280.jpg")] bg-cover bg-center h-[40vh]'>
						asdfassf asd fas d a
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
