import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Wrap,
  Avatar,
  Spacer,
  WrapItem,
} from "@chakra-ui/react";
import { FaAccusoft, FaRegBell, FaEnvelope } from "react-icons/fa";

function MainHeader() {
  return (
    <Box bg="#5A32F2" p={4} w="100%" h="50px" color="white">
      <Flex w="100%" justifyContent={"space-evenly"}>
        <Box>
          <Box as={FaAccusoft} size="22px" color="white" />
        </Box>

        <Box>
          <Text> BankApp</Text>
        </Box>

        <Box>
          <Flex justify="space-around" alignItems="center">
            <Box as={FaEnvelope} size="20px" color="" />
            <Spacer />
            <Box as={FaRegBell} size="20px" />
            <Wrap>
              <WrapItem>
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </WrapItem>
            </Wrap>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default MainHeader;
