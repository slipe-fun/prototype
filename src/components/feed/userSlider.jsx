import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Post from "./post";
import { api } from '../../lib/axios';

export default function UserSlider({ user, posts }) {
	const [page, setPage] = useState(0);
	const [userPosts, setUserPosts] = useState([]);

	const navigate = direction => {
		if (page + direction >= 0 && page + direction < userPosts.length) {
			setPage(p => p + direction);
		}
	};

	async function fetchPosts() {
		const lastBlog = userPosts[userPosts.length - 1];
		const request = await api.v1.get(`/post/get?after=${lastBlog?.id}&user=${user.id}&limit=3`);
		setUserPosts(posts => [...posts, ...(request.data?.success || [])]);
	}

	useEffect(() => setUserPosts(posts), [posts]);

	useEffect(() => {
		if (page == userPosts.length - 2) fetchPosts();
	}, [page]);

	return (
		<div className='relative overflow-hidden w-full h-full'>
			<AnimatePresence initial={false} mode='wait'>
				<Post user={user} navigate={navigate} page={page} setPage={setPage} images={userPosts} post={userPosts[page]} />
			</AnimatePresence>
		</div>
	);
}
