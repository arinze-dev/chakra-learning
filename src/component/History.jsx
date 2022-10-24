import React from "react";
import {
  Box,
  HStack,
  Spacer,
  Heading,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";

function History() {
  return (
    <Box>
      <HStack py="3" px={"2"}>
        <Heading as="h4" fontSize={"md"} fontWeight="extrabold">
          Histroy
        </Heading>
        <Spacer /> <Text fontSize={"sm"}>view more</Text>
      </HStack>

      <VStack bg="white" alignItems="stretch" px={"2"} pb="2">
        {/* start */}
        <Flex flexWrap="wrap" justify={"space-around"}>
          <Box
            w={{ base: "90%", md: "46%", lg: "48%" }}
            textAlign="left"
            bg={"#F5F6F2"}
            p="2"
            mt={"2"}
            borderRadius={"sm"}
          >
            <Text fontSize={"sm"} fontWeight="extrabold">
              Income
            </Text>
            <Text fontSize={"sm"} color="#6A59BE" fontWeight={"bold"}>
              $56,640.00
            </Text>
          </Box>
          {/* end */}
          {/* start */}
          <Box
            w={{ base: "90%", md: "46%", lg: "48%" }}
            textAlign="left"
            bg={"#F5F6F2"}
            p="2"
            mt={"2"}
            borderRadius={"sm"}
          >
            <Text fontSize={"sm"} fontWeight="extrabold">
              Income
            </Text>
            <Text fontSize={"sm"} color="#6A59BE" fontWeight={"bold"}>
              $56,640.00
            </Text>
          </Box>
          {/* end */}

          {/* start */}
          <Box
            w={{ base: "90%", md: "46%", lg: "48%" }}
            textAlign="left"
            bg={"#F5F6F2"}
            p="2"
            mt={"2"}
            borderRadius={"sm"}
          >
            <Text fontSize={"sm"} fontWeight="extrabold">
              Income
            </Text>
            <Text fontSize={"sm"} color="#6A59BE" fontWeight={"bold"}>
              $56,640.00
            </Text>
          </Box>
          {/* end */}
          {/* start */}
          <Box
            w={{ base: "90%", md: "46%", lg: "48%" }}
            textAlign="left"
            bg={"#F5F6F2"}
            p="2"
            mt={"2"}
            borderRadius={"sm"}
          >
            <Text fontSize={"sm"} fontWeight="extrabold">
              Income
            </Text>
            <Text fontSize={"sm"} color="#6A59BE" fontWeight={"bold"}>
              $56,640.00
            </Text>
          </Box>
          {/* end */}
        </Flex>
      </VStack>
    </Box>
  );
}

export default History;
