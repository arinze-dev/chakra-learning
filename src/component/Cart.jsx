import {
  Box,
  VStack,
  HStack,
  Heading,
  Spacer,
  Text,
  Spinner,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { TbDots } from "react-icons/tb";
function Cart() {
  return (
    <Box>
      <HStack w={"100%"} py="3">
        <Heading as="h4" fontSize={"md"} fontWeight="extrabold">
          My Cart
        </Heading>
        <Spacer /> <Text fontSize={"sm"}>view more</Text>{" "}
      </HStack>

      <Box bg={"#502CD0"} p={"3"} pt={"4"} borderRadius={"md"}>
        <Flex justify={"space-between"}>
          <Box color={"white"} textAlign="left">
            <Text
              textTransform={"uppercase"}
              fontWeight="bold"
              fontSize={"2xs"}
            >
              balance
            </Text>
            <Text fontWeight={"medium"}>$ 5800,303.00</Text>
            <Text fontSize={"2xs"}> Master card </Text>
            <Text>0000 000 00000 000</Text>
            <Text fontWeight={"medium"} fontSize="2xs">
              D/M/Y
            </Text>
            <Text>12/10 </Text>
            <Text fontSize="2xs">Lorem, ipsu</Text>
          </Box>

          <Box h={"140px"} alignItems="stretch">
            <Flex flexDir={"column"} alignContent="space-between">
              <Icon as={TbDots} />
              <Box h="100px" />
              <Image
                boxSize="20px"
                objectFit="cover"
                src="/image/Mastercard-New.png"
                alt="Dan Abramov"
              />
            </Flex>
          </Box>

          <Box h={"140px"} alignItems="stretch">
            <Flex flexDir={"column"} alignContent="space-between">
              <Icon as={TbDots} />
              <Box h="100px" />
              <Image
                boxSize="20px"
                objectFit="cover"
                src="/image/Mastercard-New.png"
                alt="Dan Abramov"
              />
            </Flex>
          </Box>

          <Box h={"140px"} alignItems="stretch">
            <Flex flexDir={"column"} alignContent="space-between">
              <Icon as={TbDots} />
              <Box h="100px" />
              <Image
                boxSize="20px"
                objectFit="cover"
                src="/image/Mastercard-New.png"
                alt="Dan Abramov"
              />
            </Flex>
          </Box>
          <Box h={"140px"} alignItems="stretch">
            <Flex flexDir={"column"} alignContent="space-between">
              <Icon as={TbDots} />
              <Box h="100px" />
              <Image
                boxSize="20px"
                objectFit="cover"
                src="/image/Mastercard-New.png"
                alt="Dan Abramov"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Cart;
