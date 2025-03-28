import Icon from "../../components/ui/icon";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../../components/ui/input";
import { api } from "../../lib/axios";

export default function PublishBlog() {
	const [imageSrc, setImageSrc] = useState(null);
	const [imageBase64, setImageBase64] = useState("");
	const [postName, setPostName] = useState("");
	const [isPostName, setIsPostName] = useState(false);

	const takeImage = async (camera) => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: camera ? CameraSource.Camera : CameraSource.Photos,
		});
	
		setImageSrc(image.webPath);
	
		const response = await fetch(image.webPath);
		const blob = await response.blob();
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			const base64data = reader.result; 
			setImageBase64(base64data);
		};
	
		return blob;
	};
	
	async function handlePublishPost() {
		if (!imageBase64) return;
	
		const base64String = imageBase64.split(',')[1];
		const byteCharacters = atob(base64String); 
		const byteNumbers = new Uint8Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const blob = new Blob([byteNumbers], { type: 'image/png' });
	
		const formData = new FormData();
		formData.append('image', new File([blob], 'image.png', { type: 'image/png' }));
		formData.append('in_search', postName?.length && postName?.length > 0 ? postName : 'Untitled');
		formData.append('category', 'story');
	
		const response = await api.media.post('/post/publish', formData);
		
		if (response.status === 200) {
			window.location.href = '/';
		} else {
			alert('Failed to publish post');
		}
	}

	return (
		<div className='flex flex-col w-full gap-4 h-full items-center justify-center pb-[calc(4.625rem+var(--safe-area-inset-bottom))]'>
			<AnimatePresence mode='wait'>
				{imageSrc ? (
					<div key='image' className='w-full h-full relative'>
						<motion.img
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ delay: 0 }}
							src={imageSrc}
							alt='Image'
							className='w-full h-full object-cover'
						/>
						<div className='absolute bottom-0 p-4 w-full flex gap-4'>
							{!isPostName && (
								<>
									<motion.div
										key='edit-post-name'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ delay: 0.1 }}
									>
										<Button onClick={() => setIsPostName(true)} variant='semiTransparent' size='icon' className='backdrop-blur-3xl rounded-[0.75rem]'>
											<Icon icon='edit' className='!w-7.5 !h-7.5 text-foreground' />
										</Button>
									</motion.div>
									<motion.div
										key='delete-image'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ delay: 0.15 }}
									>
										<Button onClick={() => {setImageSrc(null); setPostName("")}} variant='deleting' size='icon' className='backdrop-blur-3xl rounded-[0.75rem]'>
											<Icon icon='trash' className='!w-8 !h-8' />
										</Button>
									</motion.div>
									<motion.div
										key='publish-post'
										className='w-full'
										initial={{ opacity: 0, y: 20 }}
										exit={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										<Button onClick={handlePublishPost} className='w-full h-13 rounded-[0.75rem]'>Publish post</Button>
									</motion.div>
								</>
							)} { isPostName && (
								<motion.div
									key='post-name-input'
									className='w-full'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ delay: 0.1 }}
								>
									  <div className='flex items-center backdrop-blur-3xl bg-[#000000]/50 gap-2 rounded-[0.75rem]'>
                    <Input
											placeholder='Post name'
											maxLength={32}
											className='w-full bg-transparent pl-4 pr-0 font-medium text-white h-13'
											value={postName}
											onChange={e => setPostName(e.target.value)}
										/>
										<div onClick={() => setIsPostName(false)} className='flex min-w-13 min-h-13 items-center justify-center'>
											<Icon icon='checkmark' className='!w-6.5 !h-6.5 text-foreground/50' />
										</div>
									</div>
								</motion.div>
							)}
						</div>
					</div>
				) : (
					<>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ delay: 0.1 }}
							onClick={() => takeImage(false)}
							className='w-[12.5rem] h-[12.5rem] flex justify-center items-center rounded-4xl border-4 border-dashed border-foreground/16'
						>
							<Icon icon='plus' className='w-29 h-29 text-foreground/35' />
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ delay: 0.15 }}
							className='text-lg font-semibold text-foreground/50'
						>
							Tap to choose image (Max 3MB)
						</motion.h1>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
