import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Post from "./post";

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
			<AnimatePresence initial={false} mode='wait'>
				<Post navigate={navigate} page={page} setPage={setPage} images={images} post={{ id: Math.random() * 1000, image: images[page] }} />
			</AnimatePresence>
		</div>
	);
}
