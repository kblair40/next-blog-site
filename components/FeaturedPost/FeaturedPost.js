import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import Image from "next/image";

// width * 0.56276596
// style="width: 940px; height: 529px;" (from example wix page)

const FeaturedPost = () => {
  return (
    <React.Fragment>
      <Box
        width={{ base: "340px", sm: "420px", md: "700px", lg: "900px" }}
        height={{ base: "191px", sm: "236px", md: "394px", lg: "506px" }}
        position="relative"
      >
        <Image
          alt="post image"
          src="https://res.cloudinary.com/erinsblog/image/upload/v1664548607/arturo-esparza-33fWPnyN6tU-unsplash_ofqueo.jpg"
          objectFit="cover"
          fill
        />

        <Center
          px={{ base: "1.5rem", md: "2rem" }}
          h={{ base: "42px", sm: "52px", md: "62px" }}
          position="absolute"
          transform="translateY(-50%)"
          top={0}
          left={0}
          border="5px solid"
          borderColor="brand.darkgreen"
          bg="white"
        >
          <Text
            color="black"
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            letterSpacing={{ base: "3.5px", sm: "6px", md: "8px" }}
          >
            FEATURED POST
          </Text>
        </Center>
      </Box>
      <Flex
        width={{ base: "340px", sm: "420px", md: "700px", lg: "900px" }}
        direction="column"
        p="28px 24px 25px"
        border="1px solid black"
        borderTop="none"
        boxSizing="border-box"
      >
        <Box display="inline" fontSize="xs" mb="1rem">
          <Text display="inline">Jul 28, 2020</Text>
          <Text display="inline" mx="6px">
            &bull;
          </Text>
          <Text display="inline">4 min</Text>
        </Box>

        <Text fontWeight="700" mb="12px" fontSize="30px">
          Buying A Car Sight Unseen
        </Text>

        <Text>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're not fraudsters, but everyone thought we were. Buying a car sight
          unseen is terrifying and anxiety-inducing, but also shockingly...
        </Text>
      </Flex>
    </React.Fragment>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  let posts;
  if (query.category) {
    posts = await Post.find({ category: query.category });
  } else {
    posts = await Post.find({});
  }

  console.log(`SERVER SIDE POSTS FOR ${query.category}:`, posts, "\n");

  return {
    props: {
      category: query?.category || "love",
      posts: JSON.stringify(posts),
    },
  };
};

export default FeaturedPost;
