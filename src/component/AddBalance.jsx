import { Box, Text } from "@chakra-ui/react";
import React from "react";

function AddBalance() {
  return (
    <Box
      borderRightWidth="3px"
      borderLeftWidth="3px"
      borderRight="#77C02CD"
      borderLeft="#77C02CD"
      px="4"
      py="2"
      bg="#fff"
      mt="6"
    >
      <Text align="left" fontWeight="extrabold">
        Add Balance
      </Text>
    </Box>
  );
}

export default AddBalance;
