import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next Tailwind Data Card</title>
			</Head>
			<div>
				<button
					aria-label="like"
					className="p-2 text-red-400 transition rounded-full hover:bg-red-400 hover:shadow-md hover:text-white"
				>
					<FaHeart />
				</button>
			</div>
		</>
	);
}
