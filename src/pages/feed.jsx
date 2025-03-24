import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Home() {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Swiper direction={"vertical"} className='h-full w-full !pb-[4.65625rem]'>
				<SwiperSlide className='bg-gray-100 flex items-center justify-center'>
					<img src='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a' alt='Stock Image 1' className='w-full h-full object-cover' />
				</SwiperSlide>

				  <SwiperSlide className='bg-gray-200 flex items-center justify-center'>
					<img src='https://images.unsplash.com/photo-1581456495146-65a71b2c8e52' alt='Stock Image 2' className='w-full h-full object-cover' />
				</SwiperSlide>

				<SwiperSlide className='bg-gray-300 flex items-center justify-center'>
					<img src='https://images.unsplash.com/photo-1583511655857-d19b40a7a54e' alt='Stock Image 3' className='w-full h-full object-cover' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
