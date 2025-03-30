import { Swiper, SwiperSlide } from "swiper/react";
import UserSlider from "../../components/feed/userSlider";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { useStorage } from "../../hooks/contexts/session";
import { api } from "../../lib/axios";

import "swiper/css";
import { useEffect } from "react";

export default function Home() {
	const { token } = useStorage();

	if (!token) return window.location.href = "/auth";

	const { users, handleFetchUsers } = useFetchUsers();

	useEffect(() => {
		const currentPost = users[0]?.posts[0];
		if (currentPost?.viewed) return;

		const viewForm = new FormData();
		viewForm.append("post_id", Number(currentPost?.id));

		api.media.post("/post/view", viewForm);
	}, [users])
	
	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Swiper 
				onSlideChange={(swiper) => {
					if (swiper.activeIndex === users.length - 1) handleFetchUsers();

					const currentPost = users[swiper.activeIndex]?.posts[0];
					if (currentPost?.viewed) return;

					const viewForm = new FormData();
					viewForm.append("post_id", Number(currentPost?.id));
			
					api.media.post("/post/view", viewForm);
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
