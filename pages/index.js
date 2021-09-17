import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { useTheme } from "../utils/themeContext";

export default function Index() {
	const { toggleTheme } = useTheme();

	return (
		<>
			<Head>
				<title>API Data</title>
			</Head>
			<Layout>
				<div className="absolute w-screen h-screen bg-background p-12 flex flex-col align-center">
					<h1 className="text-center text-heading text-4xl font-bold">Title</h1>
					<p className="text-center mt-8 text-xl text-body">Content</p>
					<div className="text-center">
						<button
							className="m-8 p-4 border rounded-lg bg-primary hover:bg-primary-hover text-white transition duration-200"
							onClick={toggleTheme}
						>
							Toggle theme
						</button>
					</div>
				</div>
			</Layout>
		</>
	);
}
