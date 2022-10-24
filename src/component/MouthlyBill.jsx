import { Divider } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Link,
  Spacer,
  StackDivider,
} from "@chakra-ui/react";

function MouthlyBill() {
  return (
    <VStack>
      <HStack py="3" textAlign={"center"}>
        <Heading as="h4" fontSize={"md"} fontWeight="extrabold">
          Pay Your Mouthly Bill
        </Heading>
      </HStack>
      {/* start */}
      <HStack
        textAlign={"left"}
        w="100%"
        flexDir={"column"}
        alignItems="stretch"
        bg={"white"}
        p="2"
      >
        <HStack>
          <Image
            boxSize="30px"
            objectFit="cover"
            src="/image/envato.webp"
            alt="samsung"
          />
          <Flex flexDir={"column"}>
            <Heading as={"h5"} fontSize="md">
              Envote.com
            </Heading>
            <Text as={"p"} fontSize="sm">
              business | development
            </Text>
          </Flex>
        </HStack>
        <HStack p="2">
          <Heading size="sm" color={"#9385D6"}>
            $180
          </Heading>
          <Spacer />
          <Button bg={"#6238FF"} size="sm" py="2" color="white" px={"4"}>
            Pay Now
          </Button>
        </HStack>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack
        textAlign={"left"}
        w="100%"
        flexDir={"column"}
        alignItems="stretch"
        bg={"white"}
        p="2"
      >
        <HStack>
          <Image
            boxSize="30px"
            objectFit="cover"
            src="/image/envato.webp"
            alt="samsung"
          />
          <Flex flexDir={"column"}>
            <Heading as={"h5"} fontSize="md">
              Envote.com
            </Heading>
            <Text as={"p"} fontSize="sm">
              business | development
            </Text>
          </Flex>
        </HStack>
        <HStack p="2">
          <Heading size="sm" color={"#9385D6"}>
            $180
          </Heading>
          <Spacer />
          <Button bg={"#6238FF"} color="white" size="sm" py="2" px={"4"}>
            Pay Now
          </Button>
        </HStack>
      </HStack>
      {/* end */}
      {/* start */}
      <HStack
        textAlign={"left"}
        w="100%"
        flexDir={"column"}
        alignItems="stretch"
        bg={"white"}
        p="2"
      >
        <HStack>
          <Image
            boxSize="30px"
            objectFit="cover"
            src="/image/envato.webp"
            alt="samsung"
          />
          <Flex flexDir={"column"}>
            <Heading as={"h5"} fontSize="md">
              Envote.com
            </Heading>
            <Text as={"p"} fontSize="sm">
              business | development
            </Text>
          </Flex>
        </HStack>
        <HStack p="2">
          <Heading size="sm" color={"#9385D6"}>
            $180
          </Heading>
          <Spacer />
          <Button bg={"#6238FF"} color="white" size="sm" py="2 " px={"4"}>
            Pay Now
          </Button>
        </HStack>
      </HStack>
      {/* end */}
    </VStack>
  );
}

export default MouthlyBill;
