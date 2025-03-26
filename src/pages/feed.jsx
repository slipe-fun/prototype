import { Swiper, SwiperSlide } from "swiper/react";
import UserSlider from "../../components/feed/userSlider";
import { useEffect, useState } from "react";
import { api } from '../../lib/axios';

import "swiper/css";

export default function Home() {
	const [users, setUsers] = useState([]);

	async function fetchPosts() {
		const allUsersIds = users.map(user => user.author.id);
		const request = await api.v1.get(`/post/get?after=0&users=[${allUsersIds}]&region=slavic&horizontalCount=6`);
		const localUsers = request.data?.success || [];
		if (Object.keys(localUsers).length === 0) return;
		setUsers(users => [...users, ...Object.keys(localUsers).map(user => localUsers[user]) || []]);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Swiper 
				onSlideChange={(swiper) => {
					if (swiper.activeIndex === users.length - 1) fetchPosts();
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
