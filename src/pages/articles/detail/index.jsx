import React from "react";

import Header from "../../../components/Header";
import { Box, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { useFetchData } from "../../../hooks/useFetchData";
import { getBlogId } from "../../../services/articles";
import Loading from "../../../components/Loading";
import { convertTime } from "../../../utils/convertTime";
import { AddIcon,MinusIcon } from "@chakra-ui/icons";

function ArticleDetailPage() {
  const { id } = useParams();
  console.log("a", id);

  const { data, loading } = useFetchData({
    requestFn: () => getBlogId(id),
    dependecy: [id],
  });

const isFav = true






  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
          <Box>
            <Image src={data?.cover_url} alt={data?.title} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="16px"
          >
            <Text bgClip="text" fontSize="md" fontWeight="medium" color="gray">
              {convertTime(parseInt(data?.created))}
            </Text>
            <Text
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              color="black"
            >
              {data?.title}
            </Text>

            <Text bgClip="text" fontSize="lg" fontWeight="medium" color="gray">
              {data?.desc}
            </Text>
            <Button leftIcon={isFav ?<MinusIcon />  : <AddIcon />} colorScheme={isFav ? "red" : "teal"}>{isFav ? "Remove" : "Add" }Favorite</Button>
          </Box>
        
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticleDetailPage;
