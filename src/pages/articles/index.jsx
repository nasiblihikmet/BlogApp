import React, { useEffect, useState } from "react";
import { Box, Input, SimpleGrid, Spinner, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { getBlogs } from "../../services/articles";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../../components/Loading";

function ArticlesPage() {
  const navigate = useNavigate();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogs(), //? bu custom hook api ucun set , loading ,data verir hamisini
  });

  const [search, setSearch] = useState("");

  //? bu kodlarin evezine custom hook yaratdim ve yuxarida cagirdim
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await getBlogs(); //? everything okay
  //       setData(res.data); //? everything okay
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log("data", data);

  return (
    <>
      <Header />
      <Box px={50}>
        <NavigationShow />
       
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
          {data
            ?.filter((item, index) => index > 99)
            ?.map((item) => (
              <BlogCard
                key={"blog-id" + item.id}
                {...item}
                onReadMore={() => navigate("/articles/" + item.id)}
              />
            ))}

          {/* <BlogCard />
          <BlogCard /> */}
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticlesPage;
