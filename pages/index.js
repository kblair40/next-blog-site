import Head from "next/head";

// import Hero from "components/Hero";
// import PostPreview from "components/PostPreview";
import ResourcesImLoving from "components/ResourcesImLoving";
import MostRecentPosts from "components/MostRecentPosts";
import FeaturedPosts from "components/FeaturedPosts";

export default function Home() {
  return (
    <div
    // className="h-screen-nav"
    //
    >
      <Head>
        <title>Erins Blog!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 pt-8 -mx-4 flex flex-col items-center">
        <p className="text-3xl mb-4 font-medium">Featured Posts</p>

        <FeaturedPosts />
      </div>

      <div className="flex space-x-6 px-8 mt-8">
        <div className="w-full sm: w-1/2">
          <MostRecentPosts />
        </div>

        <div className="w-full sm: w-1/2">
          <ResourcesImLoving />
        </div>
      </div>
      {/* <Hero /> */}
      <div className="mt-8 px-4 flex justify-center">
        {/* <div className="grid grid-cols-none md:grid-cols-2 gap-x-12 px-4">
          <PostPreview variant="featured" />

          <MostRecentPosts />
        </div> */}
      </div>
    </div>
  );
}
