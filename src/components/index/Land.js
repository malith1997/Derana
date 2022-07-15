
import "../../App.css";
import abc from "../../assert/logo/logo.png";
import cover from "../../assert/img/img.png";
import { Text } from "@chakra-ui/react";
import games from "../../assert/img/1.png";
import games2 from "../../assert/img/2.png";
import games3 from "../../assert/img/3.png";
import games4 from "../../assert/img/4.png";
import news1 from "../../assert/img/7.jpg";
import video from "../../assert/img/meta2.png";
import {
    Tabs, Link, Flex, HStack,
    VStack, Grid, Image, Box,
    Center, Button, extendTheme,
    useColorMode, SimpleGrid, TabList, Tab,
} from "@chakra-ui/react";


function Land() {
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
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </header>
            <Box
                width={{ base: "100%", sm: "50%", md: "25%" }}
                backgroundImage="url('/images/kyuubi.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            />
            <Center>
                <Grid
                    h="105px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={0}
                >
                    <Center h="90px" color="white">
                        <Image
                            p="1"
                            w={"150px"}
                            src={abc}
                        />
                    </Center>

                    <Tabs isFitted variant="enclosed" p="10">
                        <TabList mb="1em" gap={2}>

                            <Tab
                                borderRadius="full"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                <Link to="/">HOME</Link>

                            </Tab>
                            <Tab
                                borderRadius="full"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                {/* <Link to ="/news">NEWS</Link> */}
                                <a href="">NEWS</a>
                            </Tab>
                            <Tab
                                borderRadius="full"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                <Link to="/games">GAMES</Link>
                            </Tab>
                            <Tab
                                borderRadius="full"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                <Link to="/contact">CONTACTS</Link>
                            </Tab>
                        </TabList>
                    </Tabs>
                </Grid>
            </Center>

            <Center w="100%" h="120%" color="white">
                <Image
                    boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    objectFit="cover" src={cover} alt="Dan Abramov" />
            </Center>

            <Center h="10%" color="white">
                <Text
                    mt="10"
                    mb="10"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize={{ base: "25px", md: "30px", lg: "44px" }}
                    fontWeight="extrabold"
                >
                    UPCOMING GAMES
                </Text>
            </Center>
            <br></br>

            <SimpleGrid
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



            <Center color="white" bgGradient="linear(to-l, #7928CA, #080808)">
                <Text
                    mt="12%"
                    mb="3%"
                    bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                    bgClip="text"
                    fontSize={{ base: "25px", md: "30px", lg: "44px" }}
                    fontWeight="extrabold"
                >
                    LATEST NEWS
                </Text>
            </Center>
            <Flex>
                <Box w={{ base: "0%", md: "30%" }} h={{ base: 0, md: 800 }}>
                    <Image
                        src={video}
                        alt="Dan Abramov"
                        px="1"
                        h={"800px"}
                        w="100%"
                        objectFit={"cover"}
                    />
                </Box>
                <VStack spacing={0} w={{ base: "100%", md: "70%" }} h={800}>
                    <HStack w={"100%"} h="400px" spacing={0}>
                        <Box w={"50%"} h={"100%"}>
                            <Image
                                src={news1}
                                alt="Dan Abramov"
                                h={"400px"}
                                w={"100%"}
                                objectFit={"cover"}
                            />
                        </Box>
                        <Box w={"50%"} h={"100%"}>
                            <VStack spacing={0}>
                                <Text
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontSize={"4xl"}
                                    fontWeight="extrabold"
                                    px={2}
                                    h={"120px"}
                                >
                                    The best online Game is out now!
                                </Text>
                                <Text
                                    fontSize={"2xl"}
                                    bgGradient="linear(to-l, #7928CA, #42f5f2)"
                                    bgClip="text"
                                    px={4}
                                    h={"200px"}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eius-mod tempor incididunt ut labore et dolore magna
                                    aliqua. Quis ipsum suspendisse ultrices gravida...
                                </Text>
                                <Box h={"80px"} pt={5}>
                                    <Button
                                        borderRadius="full"
                                        bgGradient="linear(to-l, #1dcbf2, #f2d91d)"
                                    >
                                        {" "}
                                        More{" "}
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </HStack>
                    <VStack
                        h="400px"
                        bgGradient="linear(to-l, #7928CA, #080808)"
                        w={"100%"}
                    >
                        <Text
                            pt={5}
                            h={"130px"}
                            fontSize={"5xl"}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            fontWeight="extrabold"
                            bgClip="text"
                        >
                            METAVERSE
                        </Text>
                        <Text
                            px={4}
                            fontSize={"2xl"}
                            h={"170px"}
                            bgGradient="linear(to-l,#42f5f2, #7928CA)"
                            bgClip="text"
                            fontWeight={"bold"}
                        >
                            Metaverse is the Internet part of a shared virtual reality that is
                            made as close as possible to the real world in the second stage of
                            the Internet world
                        </Text>
                        <Box w={"100%"} h={"100px"} pt={5}>
                            <Button
                                borderRadius="full"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                JOIN WITH US !
                            </Button>
                        </Box>
                    </VStack>
                </VStack>
            </Flex>


        </div>
    );
}

export default Land;