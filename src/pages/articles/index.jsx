import React, { useEffect, useState } from "react";
import { Box, Input, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { getBlogs } from "../../services/articles";

function ArticlesPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getBlogs();
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // (async function(){
    // })()
  }, []);

  return (
    <>
      <Header />
      <Box p={10}>
        <NavigationShow />
        <Input placeholder="Search" />
      </Box>
      <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </>
  );
}

export default ArticlesPage;
