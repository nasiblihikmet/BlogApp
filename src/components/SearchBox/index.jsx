import { Box, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchBox({onSearch}) {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    console.log("search", search);
    onSearch(search);
  };

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Input
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleSubmit}>Search</Button>
    </Box>
  );
}

export default SearchBox;
