import { useLocation } from "react-router";
import { NavLink } from "react-router";
import Icon from "./ui/icon";

export default function NavBar() {
	const url = useLocation();

	return (
		<>
			{url.pathname !== "/auth" ? (
				<div className='bg-navigation w-screen border-t-[1px] duration-200 pt-2 pb-2 ease-out border-foreground/10 fixed flex bottom-0 backdrop-blur-[80px] z-50'>
					<NavLink
						to='/'
						data-active={url.pathname === "/"}
						className='w-full gap-0.5 items-center flex justify-center flex-col data-[active=false]:text-foreground/25 data-[active=true]:text-primary text-foreground'
					>
						<Icon className='!w-[2.25rem] !h-[2.25rem] duration-200 ease-out' icon='feed' />
						<span className='text-[0.8125rem] font-medium duration-200 ease-out'>Blogs feed</span>
					</NavLink>
					<NavLink
						data-active={url.pathname === "/publish"}
						to='/publish'
						className='w-full items-center gap-0.5 flex justify-center flex-col data-[active=false]:text-foreground/25 data-[active=true]:text-primary text-foreground'
					>
						<Icon className='!w-[2.25rem] !h-[2.25rem] duration-200 ease-out' icon='plus' />
						<span className='text-[0.8125rem] font-medium duration-200 ease-out'>Publish blog</span>
					</NavLink>
				</div>
			) : null}
		</>
	);
}
