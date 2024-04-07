import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { shortText } from "../../utils/shortText";


function BlogCard({ title, cover_url,desc, onReadMore }) { //?api dan gelen melumatlar
  

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={cover_url} //? api dan gelen shekli props kimi burdaki shekil linkinin evezine yazdim
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">{shortText(desc,80)}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal" onClick={onReadMore}>
            Read More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BlogCard;
