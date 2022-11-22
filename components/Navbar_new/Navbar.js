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
    <Flex align="center" direction="column" pt="60px">
      <Heading
        color="brand.darkgreen"
        fontFamily="Playfair Display"
        textAlign="center"
        fontSize={{ base: "36px", sm: "48px", md: "64px", lg: "72px" }}
        lineHeight="normal"
        mb="10px"
      >
        Money and Other Things
      </Heading>
      <Text color="brand.darkgreen" fontSize={{ sm: "17px" }}>
        A collection of money stories and tips
      </Text>
    </Flex>
  );
};
