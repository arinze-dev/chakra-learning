import {
  Stack,
  HStack,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function Recent() {
  return (
    <Box bg={"transparent"} w="100%">
      <HStack py="3">
        <Text as="h4" color={"#6238FF"} m="auto" fontSize={"md"}>
          view more
        </Text>
      </HStack>
      <Box bg="white" alignSelf="stretch">
        <HStack w={{ sm: "90%", md: "70%", lg: "55%" }} p={"3"} m="auto">
          <Text fontWeight={"extrabold"}>Recent post</Text> <Spacer />{" "}
          <Text fontWeight={"bold"}>view all</Text>
        </HStack>
        <Box>
          <Flex
            justify={"space-evenly"}
            w={{ sm: "90%", md: "70%", lg: "55%" }}
            p={"3"}
            m="auto"
            flexWrap={"wrap"}
          >
            {/* start  */}
            <Box
              w={{ base: "80%", md: "45%", lg: "19%" }}
              h={"210px"}
              borderBottomWidth="3px"
              borderBottomColor="#6238FF"
              borderRadius={"sm"}
            >
              <Image
                // boxSize="150px"
                objectFit="c"
                h={"60%"}
                width="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderTopRadius={"sm"}
              />
              <Box h={"40%"} bg="#F9F5FC">
                <Text
                  px={"3"}
                  py="3"
                  fontSize="14"
                  lineHeight={"1.2"}
                  overflow={"hidden"}
                >
                  Lorem ipsum, dolor sit amet consectetur Cumque
                </Text>
              </Box>
            </Box>
            {/* end */}
            {/* start  */}
            <Box
              // w="180px"
              h={"210px"}
              borderBottomWidth="3px"
              borderBottomColor="#6238FF"
              borderRadius={"sm"}
              w={{ base: "80%", md: "45%", lg: "19%" }}
            >
              <Image
                // boxSize="150px"
                objectFit="c"
                h={"60%"}
                width="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderTopRadius={"sm"}
              />
              <Box h={"40%"} bg="#F9F5FC">
                <Text
                  px={"3"}
                  py="3"
                  fontSize="14"
                  lineHeight={"1.2"}
                  overflow={"hidden"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisic
                </Text>
              </Box>
            </Box>
            {/* end */}
            {/* start  */}
            <Box
              // w="180px"
              h={"210px"}
              borderBottomWidth="3px"
              borderBottomColor="#6238FF"
              borderRadius={"sm"}
              w={{ base: "80%", md: "45%", lg: "19%" }}
            >
              <Image
                // boxSize="150px"
                objectFit="c"
                h={"60%"}
                width="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderTopRadius={"sm"}
              />
              <Box h={"40%"} bg="#F9F5FC">
                <Text
                  px={"3"}
                  py="3"
                  fontSize="14"
                  lineHeight={"1.2"}
                  overflow={"hidden"}
                >
                  Lorem ipsum, dolor sit amet consectetur Cumque
                </Text>
              </Box>
            </Box>
            {/* end */}
            {/* start  */}
            <Box
              // w="180px"
              w={{ base: "80%", md: "45%", lg: "19%" }}
              h={"210px"}
              borderBottomWidth="3px"
              borderBottomColor="#6238FF"
              borderRadius={"sm"}
            >
              <Image
                // boxSize="150px"
                objectFit="c"
                h={"60%"}
                width="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderTopRadius={"sm"}
              />
              <Box h={"40%"} bg="#F9F5FC">
                <Text
                  px={"3"}
                  py="3"
                  fontSize="14"
                  lineHeight={"1.2"}
                  overflow={"hidden"}
                >
                  Lorem ipsum, consectetur adipisicing elit. Cumque
                </Text>
              </Box>
            </Box>
            {/* end */}
            {/* start  */}
            <Box
              // w="180px"
              w={{ base: "80%", md: "45%", lg: "19%" }}
              h={"210px"}
              borderBottomWidth="3px"
              borderBottomColor="#6238FF"
              borderRadius={"sm"}
            >
              <Image
                // boxSize="150px"
                objectFit="c"
                h={"60%"}
                width="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderTopRadius={"sm"}
              />
              <Box h={"40%"} bg="#F9F5FC">
                <Text
                  px={"3"}
                  py="3"
                  fontSize="14"
                  lineHeight={"1.2"}
                  overflow={"hidden"}
                >
                  Lorem ipsum, consectetur adipisicing elit. Cumque
                </Text>
              </Box>
            </Box>
            {/* end */}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Recent;
