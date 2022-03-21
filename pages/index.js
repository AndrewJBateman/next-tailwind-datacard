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
        <div className="absolute flex flex-col w-screen h-screen p-12 bg-background align-center">
          <h1 className="text-4xl font-bold text-center text-heading">Title</h1>
          <p className="mt-8 text-xl text-center text-body">Content</p>
          <div className="text-center">
            <button
              className="p-4 m-8 text-white transition duration-200 border rounded-lg bg-primary hover:bg-primary-hover"
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
