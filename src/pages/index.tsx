import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sistema Restaurante</title>
      </Head>
      <main className="h-screen w-screen">
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
