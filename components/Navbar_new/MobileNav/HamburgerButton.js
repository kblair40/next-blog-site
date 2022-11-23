import React from "react";
import { Stack, Box, Button } from "@chakra-ui/react";

const HamburgerButton = ({ onClick }) => {
  return (
    <Button
      variant="unstyled"
      onClick={onClick}
      // position="absolute"
      w="40px"
    >
      <Stack p="4px 8px" spacing="4px">
        <Box h="2px" bg="text.body" w="100%" />
        <Box h="2px" bg="text.body" w="100%" />
        <Box h="2px" bg="text.body" w="100%" />
      </Stack>
    </Button>
  );
};

export default HamburgerButton;
