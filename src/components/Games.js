import React from "react";

import games from "../assert/img/1.png";
import games2 from "../assert/img/2.png";
import games3 from "../assert/img/3.png";
import games4 from "../assert/img/4.png";

import {
  Button, Box, Grid, Center, Image, Tabs, TabList, Tab, extendTheme, Text,

  useColorMode,
  SimpleGrid,
  WrapItem,
} from "@chakra-ui/react";


function Games() {

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



      <SimpleGrid mt='6%'
        columns={{ base: 1, md: 1, lg: 6 }}
        spacing={10}
        justifyItems="center"
      >
        <Box></Box>
        <Box
          width={{ base: "30%", sm: "20%", md: "20%", lg: "100%" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="100%"
          h={{ base: "350px", sm: "300px", md: "400px", lg: "150%" }}
        >
          <Center>
            <Image
              p="1"
              w={"200px"}
              bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
              borderRadius="full"
              src={games}
              alt="Dan Abramov"
            />
          </Center>

          <Center h="30%" color="white">
            <SimpleGrid columns={1} spacing={0}>
              <Box>
                <Text
                  bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                  bgClip="text"
                  fontSize={{ base: "15px", md: "20px", lg: "24px" }}
                  fontWeight="extrabold"
                >
                  FIFAL 2020
                </Text>
              </Box>

              <Box>
                <Button
                  size={{ base: "sm", md: "md" }}
                  mt="10%"
                  borderRadius="full"
                  bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                >
                  READ MORE
                </Button>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>

        <Box
          width={{ base: "30%", sm: "20%", md: "20%", lg: "100%" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="100%"
          h={{ base: "350px", sm: "300px", md: "400px", lg: "150%" }}
        >
          <Center>
            <Image
              p="1"
              w={"200px"}
              bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
              borderRadius="full"
              src={games2}
              alt="Dan Abramov"
            />
          </Center>

          <Center h="30%" color="white">
            <SimpleGrid columns={1} spacing={0}>
              <Text
                bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                bgClip="text"
                fontSize={{ base: "15px", md: "20px", lg: "24px" }}
                fontWeight="extrabold"
              >
                COMBI NATION
              </Text>

              <Box>
                <Button
                  mt="5%"
                  borderRadius="full"
                  bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                  size={{ base: "sm", md: "md" }}
                >
                  READ MORE
                </Button>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>

        <Box
          width={{ base: "30%", sm: "20%", md: "20%", lg: "100%" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="100%"
          h={{ base: "350px", sm: "300px", md: "400px", lg: "150%" }}
        >
          <Center>
            <Image
              p="1"
              w={"200px"}
              bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
              borderRadius="full"
              src={games3}
              alt="Dan Abramov"
            />
          </Center>

          <Center h="30%" color="white">
            <SimpleGrid columns={1} spacing={0}>
              <Text
                bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                bgClip="text"
                fontSize={{ base: "15px", md: "20px", lg: "24px" }}
                fontWeight="extrabold"
              >
                FORZA JACSON
              </Text>
              <Box>
                <Button
                  mt="5%"
                  borderRadius="full"
                  bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                  size={{ base: "sm", md: "md" }}
                >
                  READ MORE
                </Button>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>

        <Box
          width={{ base: "30%", sm: "20%", md: "20%", lg: "100%" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius="100%"
          h={{ base: "350px", sm: "300px", md: "400px", lg: "150%" }}
        >
          <Center>
            <Image
              p="1"
              w={"200px"}
              bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
              borderRadius="full"
              src={games4}
              alt="Dan Abramov"
            />
          </Center>

          <Center h="30%" color="white">
            <SimpleGrid columns={1} spacing={0}>
              <Text
                bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                bgClip="text"
                fontSize={{ base: "15px", md: "20px", lg: "24px" }}
                fontWeight="extrabold"
              >
                MAN SKY
              </Text>
              <Box>
                <Button
                  mt="5%"
                  borderRadius="full"
                  bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                  size={{ base: "sm", md: "md" }}
                >
                  READ MORE
                </Button>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>

        <Box></Box>
      </SimpleGrid>






    </div>
  );
}

export default Games;