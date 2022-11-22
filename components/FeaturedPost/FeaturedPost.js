import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  // Spinner
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import api from "utils/api";

const FeaturedPost = () => {
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [error, setError] = useState(false);
  // console.log("\n\nFEATURED POST PROP:", featuredPost, "\n\n");

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        const response = await api.get("/featured-post");
        if (response && response.data?.post) {
          setFeaturedPost(response.data.post);
        }
        console.log("FEATURED POST RESPONSE:", response.data);
        setError(false); // Shouldn't ever be the case. Just being safe
      } catch (e) {
        console.log("FAILED TO FETCH POST:", e);
        setError(true);
      }
      setLoading(false);
    };

    fetchFeaturedPost();
  }, []);

  return (
    <React.Fragment>
      <Box
        width={{ base: "340px", sm: "420px", md: "700px", lg: "900px" }}
        height={{ base: "191px", sm: "236px", md: "394px", lg: "506px" }}
        position="relative"
      >
        <Image
          alt="post image"
          src={featuredPost?.image_url || ""}
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
          <Text display="inline">
            {featuredPost?.estimated_read_time || "&nbsp;"}
          </Text>
        </Box>

        <Link href={featuredPost ? `/post/${featuredPost._id}` : "#"}>
          <Flex direction="column" role="group" cursor="pointer">
            <Text
              fontWeight="700"
              mb="12px"
              fontSize="30px"
              _groupHover={{ color: "brand.lightgreen" }}
              transition="color 0.3s"
            >
              {featuredPost?.title || ""}
            </Text>

            <Text
              _groupHover={{ color: "brand.lightgreen" }}
              transition="color 0.3s"
              noOfLines={2}
            >
              {featuredPost?.preview_text || ""}
            </Text>
          </Flex>
        </Link>
      </Flex>
    </React.Fragment>
  );
};

export default FeaturedPost;
