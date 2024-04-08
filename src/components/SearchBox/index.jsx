import { Box, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchBox() {

  const [search, setSearch] = useState("");
  

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Input placeholder="Search" />
      <Button colorScheme="teal">Search</Button>
    </Box>
  );
}

export default SearchBox;
