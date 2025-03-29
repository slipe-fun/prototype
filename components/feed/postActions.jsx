import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useEmojiState } from "../../hooks/useEmojiState";
import { useState } from "react";

export default function PostActions({isHolding, post}) {
	const { emojis, handleEmojiClick } = useEmojiState(post);
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMessageClick = () => {
		setShowTooltip(true);
		setTimeout(() => {
			setShowTooltip(false);
		}, 2000);
	};

	return (
		<AnimatePresence mode='wait'>
				<div data-is-holding={isHolding} className='w-full data-[is-holding=true]:opacity-50 bg-gradient-to-t min-h-fit from-black/20 to-black/0 z-30 duration-150 p-4 pr-0 flex items-end overflow-visible gap-4'>
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: "0%" }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ delay: 0.15 }}
						className="relative"
					>
						<Button 
							variant='semiTransparent' 
							className='w-12 h-12 rounded-full min-w-12 min-h-12'
							onClick={handleMessageClick}
						>
							<Icon className='!w-7 !h-7 duration-200 ease-out' icon={"message"} />
						</Button>
						<AnimatePresence>
							{showTooltip && (
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
									className="absolute -top-12 origin-bottom-left left-0 bg-black/50 backdrop-blur-3xl text-white px-4 py-2.5 font-medium text-sm rounded-sm whitespace-nowrap"
								>
									Comments not ready yet
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
                        {Object.keys(emojis).map((emoji, index) => (
                            <motion.div
							initial={{ opacity: 0, y: "100%" }}
							animate={{ opacity: 1, y: "0%" }}
							exit={{ opacity: 0, y: "100%" }}
							transition={{ delay: 0.2 + index * 0.05 }}
							className={`rounded-full bg-black/50 text-white flex min-w-fit items-center font-semibold gap-2.5 py-3 duration-200 ease-out px-5 ${emojis[emoji].isActive ? "bg-white !text-black" : ""}`}
							onClick={() => handleEmojiClick(emoji)}
						>
							<img className='!w-6 !h-6' src={`./emojis/${emoji}.png`} />
							{emojis[emoji].count}
						</motion.div>
                        ))}
						
				</div>
		</AnimatePresence>
	);
}
