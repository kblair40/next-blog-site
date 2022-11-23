import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import { SocialLinks } from "../Navbar";
import HamburgerButton from "./HamburgerButton";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <React.Fragment>
      <Flex
        align="center"
        position="absolute"
        top={0}
        left={0}
        right={0}
        w="100vw"
        borderBottom="1px solid"
        borderColor="text.body"
        py=".5rem"
        // py="1.5rem"
        // border="1px solid blue"
      >
        <Flex
          position="relative"
          flex={1}
          w="100%"
          h="40px"
          justify="center"
          align="center"
        >
          <SocialLinks spacing="1rem" iconBoxSize="24px" />
        </Flex>

        <Flex
          w="100%"
          position="relative"
          maxW="64px"
          justify="center"
          align="center"
        >
          <HamburgerButton />
        </Flex>
      </Flex>

      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
};

export default MobileNav;

const NavDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          Drawer Body
          {/* <Input placeholder="Type here..." /> */}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};