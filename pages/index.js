import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>Devbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-7xl font-semibold">Devbox</h1>
    </div>
  );
}
