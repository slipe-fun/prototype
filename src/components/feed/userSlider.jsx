import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
	'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
	'https://images.unsplash.com/photo-1606787366850-de6330128bfc',
	'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
];

export default function UserSlider() {
	const [[page, direction], setPage] = useState([0, 0]);
	
	const navigate = (newDirection) => {
		const newPage = (page + newDirection + images.length) % images.length;
		setPage([newPage, newDirection]);
	};

	return (
		<div className='w-full h-full relative overflow-hidden'>
			<div 
				className='w-1/2 h-full absolute left-0 z-20 cursor-pointer' 
				onClick={() => navigate(-1)} 
			/>
			<div 
				className='w-1/2 h-full absolute right-0 z-20 cursor-pointer' 
				onClick={() => navigate(1)} 
			/>
			
			<AnimatePresence initial={false} mode="wait" custom={direction}>
				<motion.img 
					key={page}
					src={images[page]} 
					alt={`Slide ${page + 1}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.075 }}
					className='w-full h-full object-cover absolute top-0 left-0'
				/>
			</AnimatePresence>
		</div>
	);
}
