import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
	"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
	"https://images.unsplash.com/photo-1606787366850-de6330128bfc",
	"https://images.unsplash.com/photo-1544005313-94ddf0286df2",
];

export default function UserSlider() {
	const [page, setPage] = useState(0);

	const navigate = direction => {
		if (page + direction >= 0 && page + direction < images.length) {
			setPage(p => p + direction);
		}
	};

	return (
		<div className='relative overflow-hidden w-full h-full'>
			<div className='absolute w-1/2 h-full left-0 z-20 cursor-pointer' onClick={() => navigate(-1)} />
			<div className='absolute w-1/2 h-full right-0 z-20 cursor-pointer' onClick={() => navigate(1)} />
			<AnimatePresence initial={false} mode='wait'>
				<motion.img
					key={page}
					src={images[page]}
					alt={`Slide ${page + 1}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.075 }}
					className='absolute w-full h-full object-cover'
				/>
			</AnimatePresence>
		</div>
	);
}
