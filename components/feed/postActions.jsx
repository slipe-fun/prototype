import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Icon from "../ui/icon";

export default function PostActions({isHolding}) {
	return (
		<AnimatePresence mode='wait'>
				<div data-is-holding={isHolding} className='w-full data-[is-holding=true]:opacity-50 bg-gradient-to-t min-h-fit from-black/20 to-black/0 z-30 duration-150 p-4 pr-0 flex items-end overflow-hidden gap-4'>
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: "0%" }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ delay: 0.15 }}
					>
						<Button variant='semiTransparent' className='w-12 h-12 rounded-full min-w-12 min-h-12'>
							<Icon className='!w-7 !h-7 duration-200 ease-out' icon={"message"} />
						</Button>
					</motion.div>
                        {[0, 1, 2].map((_, index) => (
                            <motion.div
							initial={{ opacity: 0, y: "100%" }}
							animate={{ opacity: 1, y: "0%" }}
							exit={{ opacity: 0, y: "100%" }}
							transition={{ delay: 0.2 + index * 0.05 }}
							className='rounded-full bg-black/50 text-white flex min-w-fit items-center font-semibold gap-2.5 py-3 px-5'
						>
							<img className='!w-6 !h-6' src={'f.png'} />
							30,4K
						</motion.div>
                        ))}
						
				</div>
		</AnimatePresence>
	);
}
