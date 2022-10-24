import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box
      bg="#5145EF"
      borderTopRadius="lg"
      textAlign="center"
      p="3"
      color="white"
      w="100%"
      h="28"
      mb="2"
    >
      <Text> welcome </Text>
      <Text> Lorem ipsum dolor sit amet consectetur elit.</Text>
    </Box>
  );
}

export default Header;
