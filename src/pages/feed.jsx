import { Swiper, SwiperSlide } from "swiper/react";
import UserSlider from "../../components/feed/userSlider";
import { useFetchUsers } from "../../hooks/useFetchUsers";

import "swiper/css";

export default function Home() {
	const { users, handleFetchUsers } = useFetchUsers();
	
	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Swiper 
				onSlideChange={(swiper) => {
					if (swiper.activeIndex === users.length - 1) handleFetchUsers();
				}} 
				direction={"vertical"} 
				className='h-full w-full !pb-[calc(4.625rem+var(--safe-area-inset-bottom))]'
			>
				{users.map((user, index) => (
					<SwiperSlide key={index} className='flex items-center justify-center'>
						{({ isActive }) => (
							<UserSlider isActive={isActive} user={user.author} posts={user?.posts} />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
