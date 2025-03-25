import { Swiper, SwiperSlide } from "swiper/react";
import UserSlider from "../components/feed/userSlider";

import "swiper/css";

export default function Home() {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Swiper direction={"vertical"} className='h-full w-full !pb-[calc(4.625rem+var(--safe-area-inset-bottom))]'>
				<SwiperSlide className='flex items-center justify-center'>
					<UserSlider />
				</SwiperSlide>

				<SwiperSlide className='flex items-center justify-center'>
					<UserSlider />
				</SwiperSlide>

				<SwiperSlide className='flex items-center justify-center'>
					<UserSlider />  
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
