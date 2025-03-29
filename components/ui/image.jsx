import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useState, useEffect } from "react";
import Icon from "./icon";

const Image = forwardRef(({ className, src, alt, placeholderClassName, wrapperClassName, iconClassName, wrapper = true, ...props }, ref) => {
	const [loaded, setLoaded] = useState(false);

    useEffect(() => {
            setLoaded(false);
    }, [src]);

	const content = (
		<>
			<motion.img
				onLoad={() => setLoaded(true)}
				ref={ref}
				src={src}
				loading='lazy'
				alt={alt}
				className={cn(className, "duration-200 ease-out w-full h-full", loaded ? "opacity-100" : "opacity-0")}
				{...props}
			/>
			<AnimatePresence>
				{!loaded && (
					<motion.div
						key='placeholder'
						data-loaded={loaded}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className={cn("bg-loading absolute inset-0 bg-black/50 z-10 data-[loaded=true]:backdrop-blur-none backdrop-blur-3xl flex w-full h-full justify-center items-center", placeholderClassName)}
					>
						<Icon icon='slipe' className={cn("!w-16 opacity-25 !h-16 ease-out animate-pulse", iconClassName)} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);

	return wrapper ? <div className={cn("relative overflow-hidden h-full w-full", wrapperClassName)}>{content}</div> : content;
});

export default Image;
