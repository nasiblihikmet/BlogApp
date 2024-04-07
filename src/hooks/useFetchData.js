import { useEffect, useState } from "react";

export const useFetchData = ({ requestFn, dependecy = [] }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await requestFn(); //? everything okay
        setData(res.data); //? everything okay
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [...dependecy]);

  return { data, loading, error };
};


// const { data, loading } = useFetchData({
//     requestFn: () => getBlogs(), //? bu custom hook api ucun set , loading ,data verir hamisini
//   });  //? bashqa sehifelerde bu formada cagirilir