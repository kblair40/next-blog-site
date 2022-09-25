import Head from "next/head";

// import Hero from "components/Hero";
// import ResourcesImLoving from "components/ResourcesImLoving";
// import MostRecentPosts from "components/MostRecentPosts";
// import FeaturedPosts from "components/FeaturedPosts";
import HomePage from "components/HomePage";

export default function Home() {
  return (
    <div className="max-w-5xl md:mx-auto xl:max-w-7xl">
      <Head>
        <title>Erins Blog!</title>
        <meta name="description" content="Money and other things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
