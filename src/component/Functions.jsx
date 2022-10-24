import { Box, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { FaMinus, FaArrowRight, FaHome, FaCcVisa } from "react-icons/fa";
import React from "react";

function Functions() {
  return (
    <Box>
      <Flex
        justify="space-around"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        flexWrap="wrap"
        mt="5"
      >
        {/* start */}
        <Box
          w={{ base: "95%", md: "44%", lg: "48%" }}
          bg="#6238FE"
          color="white"
          p="1"
          mt="2"
          borderRadius="sm"
        >
          <Flex justify="center" alignItems="center">
            <Text pr="2">withdraw</Text>
            <Icon as={FaMinus} fontSize="2xl" />
          </Flex>
        </Box>
        {/* end */}
        {/* start */}
        <Box
          w={{ base: "95%", md: "44%", lg: "48%" }}
          bg="#EC376C"
          color="white"
          p="1"
          mt="2"
          borderRadius="sm"
        >
          <Flex justify="center" alignItems="center">
            <Text pr="2">Send</Text>
            <Icon as={FaArrowRight} />
          </Flex>
        </Box>
        {/* end */}
        {/* start */}
        <Box
          w={{ base: "95%", md: "44%", lg: "48%" }}
          bg="#7902D3"
          color="white"
          p="1"
          mt="2"
          borderRadius="sm"
        >
          <Flex justify="center" alignItems="center">
            <Text pr="2">Card</Text>
            <Icon as={FaCcVisa} fontSize="2xl" />
          </Flex>
        </Box>
        {/* end */}
        {/* start */}
        <Box
          w={{ base: "95%", md: "44%", lg: "48%" }}
          bg="#4DCE72"
          color="white"
          p="1"
          mt="2"
          borderRadius="sm"
        >
          <Flex justify="center" alignItems="center">
            <Text pr="2">Exchange</Text>
            <Icon as={FaHome} fontSize="2xl" />
          </Flex>
        </Box>
        {/* end */}
      </Flex>
    </Box>
  );
}

export default Functions;
