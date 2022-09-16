import Head from "next/head";

import Hero from "components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erins Blog!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {/* <div className="pt-4">
      </div> */}
    </div>
  );
}
