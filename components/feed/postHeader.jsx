import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "../ui/image";
import cdn from "../../constants/cdn";
import TimePassedFromDate from "../../lib/time-from-date";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import handlePageChange from "../../lib/pagination/handlePageChange";

export default function PostHeader({ images, page, setPage, progress, isHolding, user, post, paginationPages, currentPage, setCurrentPage, setProgress }) {
	const [isFollowed, setIsFollowed] = useState(false);

	async function handleFollow() {
		if (isFollowed) setIsFollowed(false);
		else setIsFollowed(true);

		await api.v1.post('/account/subscribe', {
			user_id: user?.id
		})
	}

	useEffect(() => setIsFollowed(user?.subscribed), [user])

	return (
		<div data-is-holding={isHolding} className='w-full min-h-fit duration-150 bg-gradient-to-b from-black/20 pt-[calc(var(--safe-area-inset-top)+1rem)] to-black/0 ease-out data-[is-holding=true]:opacity-50 flex-col gap-4 p-4 flex'>
			<div className='flex w-full gap-2.5'>
				{paginationPages[currentPage]?.map((localPage, index) => {
					const isCurrentPage = localPage === page;
					return (
						<motion.div
							key={localPage}
							className='w-full h-1 bg-white/40 rounded-full overflow-hidden cursor-pointer relative'
							onClick={() => {setPage(localPage); handlePageChange(localPage, paginationPages, currentPage, setCurrentPage, setProgress)}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{isCurrentPage && (
								<motion.div 
									className='h-full bg-white rounded-full' 
									initial={{ width: 0 }} 
									animate={{ width: `${progress}%` }}
									transition={{ duration: 0.1 }}
								/>
							)}
							{!isCurrentPage && localPage === page && (
								<motion.div 
									className='h-full bg-white/60 rounded-full' 
									initial={{ width: 0 }} 
									animate={{ width: '100%' }}
									transition={{ duration: 0.2 }}
								/>
							)}
						</motion.div>
					);
				})}
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center w-full gap-3">
					<div className="w-12 h-12 rounded-full overflow-hidden">
						<Image iconClassName="!w-8 !h-8" src={cdn + "avatars/" + user.avatar} alt="profile" />
					</div>
					<div className="flex flex-col gap-0.5">
						<span className="text-white text-[0.9375rem] font-semibold">{user.nickname || user.username}</span>
						<span className="text-white/50 text-[0.8125rem] font-medium">{TimePassedFromDate(post?.date) || "Unknown time"}</span>
					</div>
				</div>
				<Button onClick={handleFollow} variant={isFollowed ? "semiTransparent" : "default"} className="rounded-full">{isFollowed ? "Unfollow" : "Follow"}</Button>
			</div>
		</div>
	);
}
