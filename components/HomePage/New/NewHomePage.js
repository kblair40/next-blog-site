import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import FeaturedPost from "components/FeaturedPost";

const NewHomePage = () => {
  return (
    <Box>
      <FeaturedPost />
    </Box>
  );
};

export default NewHomePage;
