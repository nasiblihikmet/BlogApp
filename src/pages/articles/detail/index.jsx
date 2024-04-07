import React from "react";

import Header from "../../../components/Header";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useFetchData } from "../../../hooks/useFetchData";
import { getBlogId } from "../../../services/articles";

function ArticleDetailPage() {
  const { id } = useParams();
  console.log("a", id);

  const a = useFetchData({
    requestFn: () => getBlogId,
  });

  return (
    <>
      <Header />

      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
        <Box>
          <Image src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          gap="16px"
        >
          <Text
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            color="black"
          >
            Home
          </Text>

          <Text bgClip="text" fontSize="lg" fontWeight="medium" color="gray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            dolore obcaecati aspernatur eos possimus laboriosam accusamus
            dolorem, rem unde soluta distinctio veritatis quibusdam? Dolores at
            ipsum dolor, nulla fuga commodi?
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default ArticleDetailPage;
