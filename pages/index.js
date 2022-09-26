import Head from "next/head";

import HomePage from "components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erins Blog!</title>
        <meta name="description" content="Money and other things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
