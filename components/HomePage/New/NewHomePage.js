import React from "react";
import Image from "next/image";
import { Box, Flex, Text, Heading, Input, Button } from "@chakra-ui/react";

import FeaturedPost from "components/FeaturedPost";

const NewHomePage = () => {
  return (
    <Flex pt="80px" pb="2rem" direction="column" align="center" w="100%">
      <FeaturedPost />
      <SubscribeSection />
    </Flex>
  );
};

export default NewHomePage;

const SubscribeSection = () => {
  return (
    // <Box w={{ base: "max-content" }}>
    <Flex
      mt="72px"
      borderTop="1px solid black"
      borderBottom="1px solid black"
      width={{ base: "340px", sm: "420px", md: "700px", lg: "900px" }}
      h={{ base: "183px" }}
      align="center"
      justify="space-between"
      px="1.5rem"
    >
      <Heading color="text.body" fontSize="36px" flex={1} fontWeight="800">
        Never Miss a New Post.
      </Heading>
      <Flex align="end">
        <Input
          // size="sm"
          borderBottom="2px solid"
          borderColor="brand.lightgreen"
          variant="flushed"
          w="220px"
          placeholder="Email*"
          fontSize="15px"
          _placeholder={{
            fontSize: "15px",
            color: "text.body",
            opacity: "0.8",
          }}
          pl="4px"
          _focusVisible={{ borderColor: "brand.lightgreen" }}
        />
        <Button
          w="140px"
          borderRadius="2px"
          ml="12px"
          bg="brand.lightgreen"
          color="white"
          transition="background-color 0.3s"
          _hover={{ bg: "text.body" }}
          _active={{ bg: "text.body" }}
        >
          Subscribe
        </Button>
      </Flex>
    </Flex>
    // </Box>
  );
};
