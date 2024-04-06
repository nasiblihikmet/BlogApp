import React, { useEffect, useState } from "react";
import { Box, Input, SimpleGrid, Spinner } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { getBlogs } from "../../services/articles";
import { useNavigate } from "react-router-dom";

function ArticlesPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getBlogs(); //? everything okay
        setData(res.data); //? everything okay
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <>
      <Header />
      <Box p={10}>
        <NavigationShow />
        <Input placeholder="Search" />
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" p={50}>
          <Spinner size="lg" />
        </Box>
      ) : (
        <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
          {data
            ?.filter((item, index) => index > 99)
            ?.map(( item ) => (
              <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)}/>
            ))}

          {/* <BlogCard />
          <BlogCard /> */}
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticlesPage;
