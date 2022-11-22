import React from "react";
import { Box, Flex, Text, Heading, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { navLinks } from "./links";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box>
      <TextLogo />

      <Flex justify="space-evenly" h="50px">
        {navLinks.map((linkObj, i) => {
          return <NavLink linkObj={linkObj} key={i} />;
        })}
      </Flex>
    </Box>
  );
};

export default Navbar;

const NavLink = ({ linkObj }) => {
  return (
    <Box
      role="group"
      cursor="pointer"
      flex={1}
      h="100%"
      px="5px"
      border="1px solid #424242"
      borderRight="none"
    >
      <Link href={linkObj.to}>
        <Center
          // isActive && setcolor to light green
          h="100%"
          fontSize="15px"
          textAlign="center"
          transitionDuration="0.3s"
          _groupHover={{
            color: "brand.lightgreen",
          }}
        >
          {linkObj.label}
        </Center>
      </Link>
    </Box>
  );
};

const TextLogo = () => {
  return (
    <Flex align="center" direction="column" pt="60px" mb="58px">
      <Heading
        color="brand.darkgreen"
        fontFamily="Playfair Display"
        textAlign="center"
        fontSize={{ base: "36px", sm: "48px", md: "64px", lg: "72px" }}
        lineHeight="normal"
        mb="10px"
        fontWeight="800"
      >
        Money and Other Things
      </Heading>
      <Text color="brand.darkgreen" fontSize={{ sm: "17px" }}>
        A collection of money stories and tips
      </Text>
    </Flex>
  );
};
