import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Post from "./post";

const images = [
	"/ss.jpg",
	"/ss.jpg",
	"/ss.jpg",
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
			<AnimatePresence initial={false} mode='wait'>
				<Post navigate={navigate} page={page} setPage={setPage} images={images} post={{ id: Math.random() * 1000, image: images[page] }} />
			</AnimatePresence>
		</div>
	);
}
