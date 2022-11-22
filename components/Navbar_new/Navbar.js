import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <TextLogo />
    </Box>
  );
};

export default Navbar;

const TextLogo = () => {
  return (
    <Flex align="center" direction="column">
      <Heading
        color="brand.darkgreen"
        fontFamily="Playfair Display"
        // fontWeight="400"
        textAlign="center"
        fontSize="68px"
      >
        Money and Other Things
      </Heading>
      <Text>A collection of money stories and tips</Text>
    </Flex>
  );
};
