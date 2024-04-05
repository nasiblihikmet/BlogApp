import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";

function ArticlesPage() {
  return (
    <>
      <Header />
      <NavigationShow/>
      <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
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
