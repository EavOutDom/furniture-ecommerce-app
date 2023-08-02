import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../connection';

const useFetch = (url = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://192.168.101.67:8085/api/products");
      setData(await res.data);
    } catch (e) {
      console.log(e)
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  }

  function refetch() {
    setIsLoading(true);
    fetchData();
  }

  return { isLoading, isError, data, refetch }
}

export default useFetch;