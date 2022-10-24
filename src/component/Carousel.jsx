import { HStack, Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

function Carousel() {
  return (
    <Box bg="#6338FD" width={"100%"}>
      <HStack m={"auto"} w={{ sm: "90vw", md: "70vw", lg: "55vw" }}>
        <Text color={"white"} fontWeight="bold" p={"2"}>
          Send Money
        </Text>
      </HStack>
      <HStack pb="3" flexWrap={"wrap"} justify="center">
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
        <Box bg={"white"} w="210px" p={"2"} borderRadius="md" border={"none"}>
          <Flex flexDir={"column"} alignItems="center">
            <Image
              borderRadius="full"
              boxSize="26px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize={"sm"}>Lorem ipsum</Text>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
}

export default Carousel;
