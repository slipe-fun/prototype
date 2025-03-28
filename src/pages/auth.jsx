import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import isRegistrationDataCorrect from "../../lib/auth/signUp/isDataCorrect";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useStorage } from "../../hooks/contexts/session";

export default function Auth() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const { token, store } = useStorage();

	const handleLogin = async () => {
		if (!username.trim().length || !password.trim().length) {
			return setError('Username and password are required');
		}

		await api.v2.post('/auth/login', JSON.stringify({
			username,
			password
		})).then(async (res) => {
			await store.set("token", res?.data?.token);
			setError(null);
			window.location.href = "/";
		}).catch((err) => {
			setError(err?.response?.data?.error);
		})
	}

	async function handleSignup() {
		const isDataCorrect = isRegistrationDataCorrect(username, password);

		for (const key in isDataCorrect) {
			if (!isDataCorrect[key]?.success) {
				setError(isDataCorrect[key]?.message);
				return;
			}
		}

		await api.v2.post('/auth/register', JSON.stringify({
			username,
			password
		})).then(async (res) => {
			await store.set("token", res?.data?.token);
			setError(null);
			window.location.href = "/";
		}).catch((err) => {
			setError(err?.response?.data?.error);
		})
	}

	return (
		<div className='flex flex-col gap-4 px-4 w-full h-full items-center justify-center'>
			<h1 className='text-2xl font-semibold'>Auth (Via slipe account)</h1>
			<Input onChange={(e) => setUsername(e.target.value)} className='w-full bg-foreground/8 h-12' placeholder='Username' />
			<Input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full bg-foreground/8 h-12' placeholder='Password' />
			{error && <p className='text-red-500'>{error}</p>}
			<div className='flex flex-col w-full gap-2'>
				<Button onClick={handleLogin} className='w-full'>Login</Button>
				<Button onClick={handleSignup} variant='secondary' className='w-full'>Sign up</Button>
			</div>
		</div>
	);
}
