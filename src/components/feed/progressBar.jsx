import { motion } from "framer-motion";

export default function ProgressBar({ images, page, setPage, progress, isHolding }) {
	return (
		<div data-is-holding={isHolding} className='w-full duration-150 ease-out data-[is-holding=true]:opacity-50 gap-2.5 p-4 flex'>
			{images.map((_, index) => (
				<div
					key={index}
					className='w-full h-1 bg-white/40 rounded-full overflow-hidden'
					onClick={() => {
						setPage(index);
					}}
				>
					{page === index && (
						<motion.div
							className='h-full bg-white rounded-full'
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
						/>
					)}
				</div>
			))}
		</div>
	);
} 