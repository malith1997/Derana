import React from "react";

import {
  Button, AspectRatio,
  Container, Input, Textarea,
} from "@chakra-ui/react";


function Contact() {

  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };


  return (
    <div className="App">
      <AspectRatio ratio={30 / 10} mb="10">
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
          alt='demo'
        />
      </AspectRatio>
      <center>

        <Container>

          <Input placeholder='Name' />
          <Input placeholder='E mail' />
          <Input placeholder='Subject' />
          <Textarea placeholder='Message' />

          <Button
            size={{ base: "sm", md: "md" }}
            mt="10%"
            mb="10%"
            borderRadius="full"
            bgGradient="linear(to-l, #FF0080,#7928CA)"
          >
            send
          </Button>

        </Container>


      </center>

    </div>
  );
}

export default Contact;