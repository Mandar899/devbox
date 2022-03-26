import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-[#0C0C0C]">
      <Head>
        <title>Devbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="font-bold text-white uppercase text-8xl">
          <span className="text-[#E5202B]">Dev</span>box
        </h1>

        <div className="flex items-center space-x-10">
          <button className="btn">Register</button>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
}
