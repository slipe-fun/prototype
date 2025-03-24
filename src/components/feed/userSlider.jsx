import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function UserSlider() {
	return (
		<Swiper className='w-full h-full'>
			<SwiperSlide>
				<img src='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a' alt='Slide 1-1' className='w-full h-full object-cover' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://images.unsplash.com/photo-1606787366850-de6330128bfc' alt='Slide 1-2' className='w-full h-full object-cover' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2' alt='Slide 1-3' className='w-full h-full object-cover' />
			</SwiperSlide>
		</Swiper>
	);
}
