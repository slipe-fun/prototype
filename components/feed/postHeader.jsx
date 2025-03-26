import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import cdn from "../../constants/cdn";
import TimePassedFromDate from "../../lib/time-from-date";

export default function PostHeader({ images, page, setPage, progress, isHolding, user, post }) {
	return (
		<div data-is-holding={isHolding} className='w-full min-h-fit duration-150 bg-gradient-to-b from-black/20 pt-[calc(var(--safe-area-inset-top)+1rem)] to-black/0 ease-out data-[is-holding=true]:opacity-50 flex-col gap-4 p-4 flex'>
			<div className='flex w-full gap-2.5'>
				{images.map((_, index) => (
					<div
						key={index}
						className='w-full h-1 bg-white/40 rounded-full overflow-hidden'
						onClick={() => {
							setPage(index);
						}}
					>
						{page === index && <motion.div className='h-full bg-white rounded-full' initial={{ width: 0 }} animate={{ width: `${progress}%` }} />}
					</div>
				))}
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center w-full gap-3">
					<div className="w-12 h-12 rounded-full bg-white/40 overflow-hidden">
						<img src={cdn + "avatars/" + user.avatar} alt="profile" className="w-full h-full object-cover" />
					</div>
					<div className="flex flex-col gap-0.5">
						<span className="text-white text-[0.9375rem] font-semibold">{user.nickname ||user.username}</span>
						<span className="text-white/50 text-[0.8125rem] font-medium">{TimePassedFromDate(post?.date) || "Unknown time"}</span>
					</div>
				</div>
				<Button className="rounded-full">Follow</Button>
			</div>
		</div>
	);
}
