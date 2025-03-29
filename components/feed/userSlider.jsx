import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Post from "./post";
import { useFetchUserPosts } from "../../hooks/useFetchUserPosts";

export default function UserSlider({ user, posts, isActive }) {
	const [page, setPage] = useState(0);
	const { userPosts, fetchPosts } = useFetchUserPosts(user, posts);

	const navigate = direction => {
		if (page + direction >= 0 && page + direction < userPosts.length) {
			setPage(p => (p + direction) % userPosts.length);
		}
	};

	// useEffect(() => {
	// 	if (page === userPosts.length - 2) fetchPosts();
	// }, [page]);

	return (
		<div className='relative overflow-hidden w-full h-full'>
			<AnimatePresence initial={false} mode='wait'>
				<Post fetchPosts={fetchPosts} isActive={isActive} user={user} navigate={navigate} page={page} setPage={setPage} images={userPosts} post={userPosts[page]} />
			</AnimatePresence>
		</div>
	);
}
