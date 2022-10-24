import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import MainHeader from "./component/MainHeader";
import Header from "./component/Header";
import TotalBalance from "./component/TotalBalance";
import AddBalance from "./component/AddBalance";
import Functions from "./component/functions";
import Goal from "./component/Goal";
import History from "./component/History";
import Cart from "./component/Cart";
import Transactions from "./component/Transactions";
import MouthlyBill from "./component/MouthlyBill";
import Recent from "./component/Recent";
import Footer from "./component/Footer";
import Carousel from "./component/Carousel";

function App() {
  return (
    <>
      <Stack bg="#F6F6F6" alignItems="center">
        <MainHeader />
        <Box
          w={{ sm: "90vw", md: "70vw", lg: "55vw" }}
          // bg="#5145EF"
          align="center"
          mt="8"
          borderTopRadius="lg"
          borderBottomRadius="sm"
        >
          <Header />
          <TotalBalance />
          <AddBalance />
          <Functions />
          <Goal />
          <History />
          <Cart />
          <Transactions />
        </Box>
        <Carousel />
        <Box
          w={{ sm: "90vw", md: "70vw", lg: "55vw" }}
          align="center"
          mt="8"
          borderTopRadius="lg"
          borderBottomRadius="sm"
        >
          <MouthlyBill />
        </Box>
        {/* <Box mt="8" borderTopRadius="lg" borderBottomRadius="sm"></Box> */}
        <Recent />
        <Footer />
      </Stack>
    </>
  );
}

export default App;
