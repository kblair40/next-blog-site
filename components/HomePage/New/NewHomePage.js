import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import FeaturedPost from "components/FeaturedPost";

const NewHomePage = () => {
  return (
    <Flex pt="80px" pb="2rem" direction="column" align="center" w="100%">
      <FeaturedPost />
    </Flex>
  );
};

export default NewHomePage;
