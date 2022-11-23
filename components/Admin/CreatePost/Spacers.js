import React from "react";
import { Button as ChakraButton, Text, Flex } from "@chakra-ui/react";

const Spacers = ({ addSpace }) => {
  const handleClick = (cls) => {
    addSpace(cls);
  };

  return (
    <Flex align="end">
      <Text className="font-medium">Spacers</Text>
      <ChakraButton
        colorScheme="teal"
        onClick={() => handleClick("spacer-sm")}
        size="sm"
        ml="1rem"
      >
        8px (sm)
      </ChakraButton>
      <ChakraButton
        colorScheme="teal"
        ml=".5rem"
        onClick={() => handleClick("spacer-lg")}
        size="sm"
      >
        16px (lg)
      </ChakraButton>
    </Flex>
  );
};

export default Spacers;
