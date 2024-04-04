import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box
      height="100px"
      p="12"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="teal"
    >
      <Text>Blog</Text>
    
      <Stack direction="row" spacing={4} align="center">
        <Button variant="ghost" color="white">
         Home
        </Button>
        <Button variant="ghost" color="white">
          Articles
        </Button>
        <Button variant="ghost" color="white">
          About
        </Button>
        <Button variant="ghost" color="white">
          FAQ
        </Button>
        <Button variant="ghost" color="white">
         Create your article
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
