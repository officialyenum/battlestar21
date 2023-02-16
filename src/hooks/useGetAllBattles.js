import { useEffect, useState } from "react";
import { httpClient } from "../network";

export const useGetAllBattles = () => {
  const [battles, setBattles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const getPaginatedBattles = async () => {
    setIsLoading(true);
    try {
      const { data } = await httpClient.get(
        `battles?page=${currentPage}&count=10`
      );
      if (data) {
        setBattles(data?.data);
        console.log(data);
        setIsLoading(true);
        setHasNextPage(data?.hasNextPage);
        setHasPrevPage(data?.hasPreviousPage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPaginatedBattles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageIncrement = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageDecrement = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    battles,
    isLoading,
    handlePageIncrement,
    currentPage,
    handlePageDecrement,
    hasNextPage,
    hasPrevPage,
  };
};
