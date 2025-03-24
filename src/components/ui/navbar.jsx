import { useLocation } from "react-router";
import { NavLink } from "react-router";

export default function NavBar() {
	const url = useLocation();

	return (
		<>
			{url.pathname !== "/auth" ? (
				<div className='bg-navigation pb-[--safe-area-inset-bottom] w-screen border-t-[1px] duration-200 ease-out border-foreground/10 fixed flex bottom-0 backdrop-blur-[80px] z-50'>
					<NavLink
						to='/'
						data-active={url.pathname === "/"}
						className='w-full items-center flex justify-center flex-col h-[4.5rem] data-[active=false]:text-foreground/25 data-[active=true]:text-primary text-foreground'
					>
						{/* <Svg className='!w-[2.3125rem] !h-[2.3125rem] duration-200 ease-out' icon={icons["blogs"]} /> */}
						<span className='text-[0.8125rem] duration-200 ease-out'>Blogs feed</span>
					</NavLink>
					<NavLink
						data-active={url.pathname === "/publish"}
						to='/publish'
						className='w-full items-center flex justify-center flex-col h-[4.5rem] data-[active=false]:text-foreground/25 data-[active=true]:text-primary text-foreground'
					>
						{/* <Svg className='!w-[2.3125rem] !h-[2.3125rem] duration-200 ease-out' icon={icons["plus"]} /> */}
						<span className='text-[0.8125rem] duration-200 ease-out'>Publish blog</span>
					</NavLink>
				</div>
			) : null}
		</>
	);
}
