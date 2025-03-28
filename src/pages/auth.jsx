import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Auth() {
	return (
		<div className='flex flex-col gap-4 px-4 w-full h-full items-center justify-center'>
			<h1 className='text-2xl font-semibold'>Auth (Via slipe account)</h1>
			<Input className='w-full bg-foreground/8 h-12' placeholder='Email' />
			<Input type='password' className='w-full bg-foreground/8 h-12' placeholder='Password' />
			<p className='text-red-500'>Error</p>
			<div className='flex flex-col w-full gap-2'>
				<Button className='w-full'>Login</Button>
				<Button variant='secondary' className='w-full'>
					Sign up
				</Button>
			</div>
		</div>
	);
}
