import Head from "next/head";

// import Hero from "components/Hero";
import ResourcesImLoving from "components/ResourcesImLoving";
import MostRecentPosts from "components/MostRecentPosts";
import FeaturedPosts from "components/FeaturedPosts";

export default function Home() {
  return (
    <div className="max-w-5xl md:mx-auto">
      <Head>
        <title>Erins Blog!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 pt-4 sm:pt-8 -mx-4 flex flex-col">
        <FeaturedPosts />
      </div>

      <div className="flex flex-col space-y-8 sm:flex-row  sm:space-x-6 px-4 sm:px-6 md:px-8 mt-8">
        <div>
          <ResourcesImLoving />
        </div>
        {/* <div className="w-full md:w-3/5">
          <ResourcesImLoving />
        </div> */}

        {/* <div className="hidden md:block w-full md:w-2/5">
          <MostRecentPosts />
        </div> */}
        <div className="md:hidden">
          <MostRecentPosts />
        </div>
      </div>

      {/* <Hero /> */}
    </div>
  );
}
