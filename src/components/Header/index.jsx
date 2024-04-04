import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box height="100px" p="12" alignItems="center" backgroundColor="teal">
      Header
      <Stack direction='row' spacing={4} align='center'>
  
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  
</Stack>
    </Box>
  ); 
}

export default Header;
