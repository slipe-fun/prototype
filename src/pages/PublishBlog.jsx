import Icon from "../../components/ui/icon";
import { useState } from "react";
import {Button} from "../../components/ui/button";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default function PublishBlog() {
  const [imageSrc, setImageSrc] = useState(null);

	const takeImage = async camera => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: camera ? CameraSource.Camera : CameraSource.Photos,
		});
		setImageSrc(image.webPath);
	};

	return (
		<div className='flex flex-col gap-4 w-full h-full items-center justify-center pb-[calc(4.625rem+var(--safe-area-inset-bottom))]'>
			{imageSrc ? (
				<div className='w-full h-full relative'>
					<img src={imageSrc} alt='Image' className='w-full h-full object-cover' />
					<div className="absolute bottom-0 p-4 w-full flex gap-4">
						<Button variant='semiTransparent' size='icon' className="backdrop-blur-3xl rounded-[0.75rem]">
							<Icon icon='edit' className='!w-7.5 !h-7.5 text-foreground' />
						</Button>
            <Button variant='deleting' size='icon' className="backdrop-blur-3xl rounded-[0.75rem]">
							<Icon icon='trash' className='!w-8 !h-8' />
						</Button>
            <Button className="w-full h-13 rounded-[0.75rem]">
							Publish post
						</Button>
					</div>
				</div>
			) : (
				<>
					<div
						onClick={() => takeImage(false)}
						className='w-[12.5rem] h-[12.5rem] flex justify-center items-center rounded-4xl border-4 border-dashed border-foreground/16'
					>
						<Icon icon='plus' className='w-29 h-29 text-foreground/35' />
					</div>
					<h1 className='text-lg font-semibold text-foreground/50'>Tap to choose image (Max 3MB)</h1>
				</>
			)}
		</div>
	);
}
