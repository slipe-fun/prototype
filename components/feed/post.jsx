import { useState, useEffect, useRef } from "react";
import PostHeader from "./postHeader";
import cdn from "../../constants/cdn";
import PostActions from "./postActions";
import Image from "../ui/image";
import genPages from "../../lib/pagination/genPages";
import handlePageChange from "../../lib/pagination/handlePageChange";

export default function Post({ post, images, page, navigate, setPage, user, isActive, fetchPosts }) {
	const [progress, setProgress] = useState(0);
	const [isHolding, setIsHolding] = useState(false);
	const intervalRef = useRef(null);
	const timeoutRef = useRef(null);

	const [paginationPages, setPaginationPages] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);	  

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
			handlePageChange(page + 1, paginationPages, currentPage, setCurrentPage, setProgress);
		}
	}, [progress]);

	const handleMouseDown = () => {
		timeoutRef.current = setTimeout(() => {
			setIsHolding(true);
		}, 150);
	};
	
	const handleMouseUp = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setIsHolding(false);
	};

	useEffect(() => {
		setPaginationPages(genPages(user?.postsCount) || []);
		setCurrentPage(0);
	  }, [user]);
	  
	useEffect(() => {
		fetchPosts();
	}, [currentPage]);

	return (
		<div
			className='w-full relative flex flex-col h-full'
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onTouchStart={handleMouseDown}
			onTouchEnd={handleMouseUp}
		>
			<PostHeader user={user} images={images} page={page} isHolding={isHolding} handlePageChange={handlePageChange} setPage={setPage} progress={progress} post={post} paginationPages={paginationPages} currentPage={currentPage} setCurrentPage={setCurrentPage} setProgress={setProgress} />
			<div className="w-full h-full z-20 flex">
				<div className='w-1/2 h-full cursor-pointer' onClick={() => {handlePageChange(page - 1, paginationPages, currentPage, setCurrentPage, setProgress); navigate(-1); }} />
				<div className='w-1/2 h-full cursor-pointer' onClick={() => {handlePageChange(page + 1, paginationPages, currentPage, setCurrentPage, setProgress); navigate(1); }} />
			</div>
			<PostActions isHolding={isHolding} post={post} />
			<Image src={cdn + "posts/" + post?.image} alt={`Post ${post?.id}`} wrapperClassName='absolute w-full top-0 -z-10 left-0 h-full' className="object-cover" />
		</div>
	);
}
