import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom"
import { ROUTER } from "../../constant/router";

function Header() {

     const navigate = useNavigate()
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
        <Button variant="ghost" color="white" onClick={()=>navigate(ROUTER.HOME)}>
         Home
        </Button>
        <Button variant="ghost" color="white">
          Articles
        </Button>
        <Button variant="ghost" color="white" onClick={()=>navigate(ROUTER.ABOUT)}>
          About
        </Button>
        <Button variant="ghost" color="white">
          FAQ
        </Button>
        <Button >
         Create your article
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
