import React from "react";
import {
  VStack,
  Heading,
  Box,
  Text,
  HStack,
  Spacer,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

function Goal() {
  return (
    <VStack mt="4" alignItems={"center"}>
      <HStack w={"100%"} py="3">
        <Heading as="h4" fontSize={"md"} fontWeight="extrabold">
          Saving Goals
        </Heading>
        <Spacer /> <Text fontSize={"sm"}>view more</Text>{" "}
      </HStack>
      {/* start */}
      <HStack w={"100%"} bg="white" p="0">
        <Box
          w={{ base: "50%", md: "65%", lg: "80%" }}
          p="2"
          h={"80%"}
          borderLeft={"2px"}
          borderColor="green.300"
        >
          <Heading as="h4" fontSize="14" textAlign="left">
            Finance business
          </Heading>
          <Text textAlign="left" fontSize="10">
            business
          </Text>
        </Box>
        <Spacer />
        <Box
          h="100%"
          borderLeft={"2px"}
          borderColor="#F5F5F5"
          p={"2"}
          w={{ base: "50%", md: "30%", lg: "20%" }}
          color="green.300"
        >
          <Flex alignItems="center" justify="space-between">
            <Text fontWeight={"bold"} fontSize="16">
              $130
            </Text>
            <Spacer />
            <CircularProgress value={30} color="green.300">
              <CircularProgressLabel>30%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Box>
      </HStack>
      {/* end */}

      {/* start */}
      <HStack w={"100%"} bg="white" p="0">
        <Box
          w={{ base: "50%", md: "65%", lg: "80%" }}
          p="2"
          h={"80%"}
          borderLeft={"2px"}
          borderColor="#7902D3"
        >
          <Heading as="h4" fontSize="14" textAlign="left">
            App Store
          </Heading>
          <Text textAlign="left" fontSize="10">
            Technology
          </Text>
        </Box>
        <Spacer />
        <Box
          h="100%"
          borderLeft={"2px"}
          borderColor="#F5F5F5"
          p={"2"}
          w={{ base: "50%", md: "30%", lg: "20%" }}
          color="#7902D3"
        >
          <Flex alignItems="center" justify="space-between">
            <Text fontWeight={"bold"} fontSize="16">
              $930
            </Text>
            <Spacer />
            <CircularProgress value={90} color="#7902D3">
              <CircularProgressLabel>90%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Box>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack w={"100%"} bg="white" p="0">
        <Box
          w={{ base: "50%", md: "65%", lg: "80%" }}
          p="2"
          h={"80%"}
          borderLeft={"2px"}
          borderColor="#C96383"
        >
          <Heading as="h4" fontSize="14" textAlign="left">
            Gameing software
          </Heading>
          <Text textAlign="left" fontSize="10">
            Development
          </Text>
        </Box>
        <Spacer />
        <Box
          h="100%"
          borderLeft={"2px"}
          borderColor="#F5F5F5"
          p={"2"}
          w={{ base: "50%", md: "30%", lg: "20%" }}
          color="#C96383"
        >
          <Flex alignItems="center" justify="space-between">
            <Text fontWeight={"bold"} fontSize="16">
              $530
            </Text>
            <Spacer />
            <CircularProgress value={54} color="#C96383">
              <CircularProgressLabel>54%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Box>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack w={"100%"} bg="white" p="0">
        <Box
          w={{ base: "50%", md: "65%", lg: "80%" }}
          p="2"
          h={"80%"}
          borderLeft={"2px"}
          borderColor="#6A59BE"
        >
          <Heading as="h4" fontSize="14" textAlign="left">
            Finance business
          </Heading>
          <Text textAlign="left" fontSize="10">
            business
          </Text>
        </Box>
        <Spacer />
        <Box
          h="100%"
          borderLeft={"2px"}
          borderColor="#F5F5F5"
          p={"2"}
          w={{ base: "50%", md: "30%", lg: "20%" }}
          color="#6A59BE"
        >
          <Flex alignItems="center" justify="space-between">
            <Text fontWeight={"bold"} fontSize="16">
              $603
            </Text>
            <Spacer />
            <CircularProgress value={80} color="#6A59BE">
              <CircularProgressLabel>80%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Box>
      </HStack>
      {/* end */}
    </VStack>
  );
}

export default Goal;
