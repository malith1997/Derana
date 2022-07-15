
import "../../App.css";

import {
    Center,
    Wrap,
    Avatar,extendTheme ,useColorMode,WrapItem,
} from "@chakra-ui/react";


import log1 from "../../assert/logo/fb.png";
import log2 from "../../assert/logo/wh.png";
import log3 from "../../assert/logo/pri.png";
import log4 from "../../assert/logo/li.png";

function Footer() {
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

            <Center
                bgGradient="linear(to-l,#FF0080,#7928CA,#080808,)"
                h="1%"
                color="white"
                fontSize={{ base: "8px", md: "10px", lg: "14px" }}
            >
                <text>.</text>
            </Center>
            <Center>
                <Wrap
                    mt={{ base: "5%", sm: "2%", md: "2%", lg: "2%" }}
                    mb={{ base: "5%", sm: "10%", md: "5%", lg: "1%" }}>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar
                            name="Kola Tioluwani"
                            src="https://bit.ly/tioluwani-kolawole"
                        />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    </WrapItem>
                </Wrap>

            </Center>

            <Center>
                <Wrap mb={{ base: "5%", sm: "10%", md: "5%", lg: "2%" }}>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src={log1} />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Kola Tioluwani" src={log2} />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Kent Dodds" src={log3} />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Ryan Florence" src={log4} />
                    </WrapItem>
                </Wrap>
            </Center>


            <Center
                bgGradient="linear(to-l,#FF0080,#7928CA,#080808,)"
                h="1%"
                color="white"
                fontSize={{ base: "8px", md: "10px", lg: "14px" }}
            >
                Malith 2022 @ All rights reserved
            </Center>
        </div>
    );
}

export default Footer;