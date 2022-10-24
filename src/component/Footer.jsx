import React from "react";
import { Box, Heading, HStack, Icon, Text, Flex } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <Box w={"100%"}>
      <Flex flexDir={"column"}>
        <HStack bg={"#704CF3"} color="white" p={"3"} w="100%">
          <Text as={"p"} m="auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </HStack>

        <HStack justify={"center"} spacing="1" p={"3"}>
          <Icon as={FaFacebookF} />
          <Icon as={FaWhatsapp} />
          <Icon as={FaTwitter} />
          <Icon as={FaLinkedinIn} />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
