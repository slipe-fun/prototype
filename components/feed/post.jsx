import { useState, useEffect, useRef } from "react";
import PostHeader from "./postHeader";
import cdn from "../../constants/cdn";
import PostActions from "./postActions";

export default function Post({ post, images, page, navigate, setPage, user, isActive }) {
	const [progress, setProgress] = useState(0);
	const [isHolding, setIsHolding] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}

		if (!isHolding && isActive) {
			intervalRef.current = setInterval(() => {
				setProgress(prev => (prev >= 100 ? 0 : prev + 100 / 100));
			}, 100);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isHolding, isActive]);

	useEffect(() => {
		setProgress(0);
	}, [page]);

	useEffect(() => {
		if (progress >= 100) {
			navigate(1);
		}
	}, [progress]);

	const handleMouseDown = () => setIsHolding(true);
	const handleMouseUp = () => setIsHolding(false);
	const handlePageChange = index => {
		setProgress(0);
		setPage(index);
	};

	return (
		<div
			className='w-full relative flex flex-col h-full'
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onTouchStart={handleMouseDown}
			onTouchEnd={handleMouseUp}
		>
			<PostHeader user={user} images={images} page={page} isHolding={isHolding} setPage={handlePageChange} progress={progress} post={post} />
			<div className="w-full h-full flex">
				<div className='absolute w-1/2 h-full z-20 cursor-pointer' onClick={() => navigate(-1)} />
				<div className='absolute w-1/2 h-full z-20 cursor-pointer' onClick={() => navigate(1)} />
			</div>
			<PostActions isHolding={isHolding} post={post} />
			<img src={cdn + "posts/" + post?.image} alt={`Post ${post?.id}`} className='absolute w-full top-0 -z-10 left-0 h-full object-cover' />
		</div>
	);
}
