import React from "react";
import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../components/Header";

function HomePage() {
  return (
    <div>
      <Header />
      {/* <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
      <Box
        w="100%"
        h="200px"
        bgGradient="radial(gray.300, yellow.400, pink.200)"
      /> */}

      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
        <Box>
          <Text
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            color="black"
          >
            Home
          </Text>

          <Text bgClip="text" fontSize="2xl" fontWeight="medium" color="black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            dolore obcaecati aspernatur eos possimus laboriosam accusamus
            dolorem, rem unde soluta distinctio veritatis quibusdam? Dolores at
            ipsum dolor, nulla fuga commodi?
          </Text>

          <Button>Get started</Button>
        </Box>
        <Box>
          <Image src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png" />
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default HomePage;
