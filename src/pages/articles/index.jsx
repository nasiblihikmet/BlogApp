import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";

function ArticlesPage() {
  return (
    <>
      <Header />
      <SimpleGrid columns={{ sm: 2 }} spacing="10">
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>


      </SimpleGrid>
    </>
  );
}

export default ArticlesPage;
