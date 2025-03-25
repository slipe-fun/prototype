import { useState, useEffect } from "react";
import PostHeader from "./postHeader";
import ImageDisplay from "./imageDisplay";

export default function Post({ post, images, page, setPage, navigate }) {
	const [progress, setProgress] = useState(0);
	const [isHolding, setIsHolding] = useState(false);

	useEffect(() => {
		let interval;
		
		if (!isHolding) {
			interval = setInterval(() => {
				setProgress(prev => {
					if (prev >= 100) {
						setPage(currentPage => (currentPage + 1) % images.length);
						return 0;
					}
					return prev + 100 / 80;
				});
			}, 100);
		}

		return () => clearInterval(interval);
	}, [isHolding, setPage, images.length]);

	useEffect(() => {
		setProgress(0);
	}, [page]);

	const handleMouseDown = () => {
		setIsHolding(true);
	};

	const handleMouseUp = () => {
		setIsHolding(false);
	};

	return (
		<div
			className='w-full relative h-full'
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onTouchStart={handleMouseDown}
			onTouchEnd={handleMouseUp}
		>
			<PostHeader
				images={images}
				page={page}
				isHolding={isHolding}
				setPage={index => {
					setProgress(0);
					setPage(index);
				}}
				progress={progress}
			/>
			<div className='absolute w-1/2 h-[calc(100%-6rem-var(--safe-area-inset-top))] bottom-0 left-0 z-20 cursor-pointer' onClick={() => navigate(-1)} />
			<div className='absolute w-1/2 h-[calc(100%-6rem-var(--safe-area-inset-top))] bottom-0 right-0 z-20 cursor-pointer' onClick={() => navigate(1)} />
			<ImageDisplay post={post} isHolding={isHolding} />
		</div>
	);
}
