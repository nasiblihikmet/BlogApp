import React, { useEffect, useState } from "react";
import { Box, Input, SimpleGrid, Spinner, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { getBlogs } from "../../services/articles";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../../components/Loading";
import SearchBox from "../../components/SearchBox";

function ArticlesPage() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogs(), //? bu custom hook api ucun set , loading ,data verir hamisini
  });

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  //? bu kodlarin evezine custom hook yaratdim ve yuxarida cagirdim usefetchdata
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

  const handleSearch = (text) => {
    const filterData = searchData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchData(filterData);
    console.log("text", text);
  };

  return (
    <>
      <Header />
      <Box px={50}>
        <NavigationShow />
        <SearchBox onSearch={handleSearch} />
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
