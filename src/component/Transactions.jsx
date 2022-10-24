import {
  Stack,
  HStack,
  Heading,
  Text,
  Spacer,
  VStack,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function Transactions() {
  return (
    <Stack>
      <HStack w={"100%"} py="3">
        <Heading as="h4" fontSize={"md"} fontWeight="extrabold">
          Transactions
        </Heading>
        <Spacer />{" "}
        <Text fontSize={"sm"} fontWeight="medium">
          view more
        </Text>
      </HStack>
      {/* start */}
      <HStack
        bg={"#FFFFFF"}
        alignItems="center"
        justify={"space-between"}
        p="2"
        px="4"
      >
        <Box>
          <Flex flexDir={"row"} alignItems="center">
            <Image
              boxSize="40px"
              objectFit="contain"
              src="/image/images.jpeg"
              alt="Dan Abramov"
              mr={"2"}
              bg="#F9F7FA"
              p={"2"}
            />
            <Flex flexDir={"column"} alignItems="flex-start">
              <Heading as={"h4"} fontSize="14">
                NameCheap Inc
              </Heading>
              <Text fontSize="10">Development</Text>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text color={"red.400"} fontWeight="bold">
            -180
          </Text>
        </Box>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack
        bg={"#FFFFFF"}
        alignItems="center"
        justify={"space-between"}
        p="2"
        px="4"
      >
        <Box>
          <Flex flexDir={"row"} alignItems="center">
            <Image
              boxSize="40px"
              objectFit="cover"
              src="/image/Apple-Logo.png"
              alt="Dan Abramov"
              mr={"2"}
              bg="#F9F7FA"
              p={"2"}
            />
            <Flex flexDir={"column"} alignItems="flex-start">
              <Heading as={"h4"} fontSize="14">
                Apple Inc
              </Heading>
              <Text fontSize="10">Development</Text>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text color={"red.400"} fontWeight="bold">
            -280
          </Text>
        </Box>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack
        bg={"#FFFFFF"}
        alignItems="center"
        justify={"space-between"}
        p="2"
        px="4"
      >
        <Box>
          <Flex flexDir={"row"} alignItems="center">
            <Image
              boxSize="40px"
              objectFit="contain"
              src="/image/samsung.png"
              alt="Dan Abramov"
              mr={"2"}
              bg="#F9F7FA"
              p={"2"}
            />
            <Flex flexDir={"column"} alignItems="flex-start">
              <Heading as={"h4"} fontSize="14">
                NameCheap Inc
              </Heading>
              <Text fontSize="10">Development</Text>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text color={"red.400"} fontWeight="bold">
            -180
          </Text>
        </Box>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack
        bg={"#FFFFFF"}
        alignItems="center"
        justify={"space-between"}
        p="2"
        px="4"
      >
        <Box>
          <Flex flexDir={"row"} alignItems="center">
            <Image
              boxSize="40px"
              objectFit="contain"
              src="/image/images.jpeg"
              alt="Dan Abramov"
              mr={"2"}
              bg="#F9F7FA"
              p={"2"}
            />
            <Flex flexDir={"column"} alignItems="flex-start">
              <Heading as={"h4"} fontSize="14">
                NameCheap Inc
              </Heading>
              <Text fontSize="10">Development</Text>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text color={"red.400"} fontWeight="bold">
            -480
          </Text>
        </Box>
      </HStack>
      {/* end */}
    </Stack>
  );
}

export default Transactions;
