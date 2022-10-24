import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";

function TotalBalance() {
  return (
    <Box
      w={{ sm: "80%", md: "75%", lg: "90%" }}
      bg="#E4DFFD"
      p="2"
      textAlign="center"
      mt="-40px"
    >
      <Icon
        as={FaBuilding}
        fontSize="4xl"
        bg="#5A32F2"
        color="white"
        p="2"
        borderRadius="full"
        mb="1px"
      />
      <Text fontSize="sm" fontWeight="bold" m="1px">
        Total Balance
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="#5145EF">
        $56,985.00
      </Text>
    </Box>
  );
}

export default TotalBalance;
