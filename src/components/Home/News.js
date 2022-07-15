import React from "react";

import {
  Button, Box, Grid, Center, Image, Tabs, TabList, Tab, extendTheme, Text,

  useColorMode,
  SimpleGrid,
  WrapItem,
} from "@chakra-ui/react";


function News() {

  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <header>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <Box
        width={{ base: "100%", sm: "50%", md: "25%" }}
        backgroundImage="url('/images/kyuubi.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />

      <Grid
        h="105px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <Center>
          <Image mt="1" mb='12'

            w={"110px"}




          />
        </Center>

        <Tabs isFitted variant="enclosed" p="10">
          <TabList mb="1em" gap={2}>
            <Tab
              borderRadius="full"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
              HOME
            </Tab>
            <Tab
              borderRadius="full"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
              NEWS
            </Tab>
            <Tab
              borderRadius="full"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
              GAMES
            </Tab>
            <Tab
              borderRadius="full"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
              CONTACTS
            </Tab>
          </TabList>
        </Tabs>
      </Grid>


      <SimpleGrid columns={1} >


        <Box
          //  boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}

          boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}

          mb="1%"

          bgGradient="linear(to-l, #242323, #1f1c1c)"
        >
          <Text
            mt="8%"
            mb="5%"
            ml="2%"
            mr="2%"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: "25px", md: "30px", lg: "44px" }}
            fontWeight="extrabold"
          >
            The best online Game is out now!
          </Text>

          <Text
            mb="2%"
            ml="2%"
            mr="2%"
            fontSize={{ base: "20px", sm: "25px", md: "20px", lg: "25px" }}
            bgGradient="linear(to-l, #7928CA, #42f5f2)"
            bgClip="text"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius-mod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </Text>
          <Button mt='5'
            borderRadius="full"
            bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
          >
            {" "}
            More{" "}
          </Button>
        </Box>



        <Box
          //  boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}

          boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}

          mb="1%"

          bgGradient="linear(to-l, #242323, #1f1c1c)"
        >
          <Text
            mt="8%"
            mb="5%"
            ml="2%"
            mr="2%"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: "25px", md: "30px", lg: "44px" }}
            fontWeight="extrabold"
          >
            METAVERSE
          </Text>

          <Text
            mb="2%"
            ml="2%"
            mr="2%"
            fontSize={{ base: "20px", sm: "25px", md: "20px", lg: "25px" }}
            bgGradient="linear(to-l, #7928CA, #42f5f2)"
            bgClip="text"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius-mod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </Text>
          <br></br>
        </Box>
      </SimpleGrid>



    </div>
  );
}

export default News;