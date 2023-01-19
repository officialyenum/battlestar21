import { useEffect, useState } from "react";
import { httpClient } from "../network";

export const useGetAllCharacters = () => {
  const [characters, setCharacters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const getPaginatedCharacter = async () => {
    setIsLoading(true);
    try {
      const { data } = await httpClient.get(
        `characters?page=${currentPage}&count=9`
      );
      if (data) {
        setCharacters(data?.data);
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
    getPaginatedCharacter();
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
    characters,
    isLoading,
    handlePageIncrement,
    currentPage,
    handlePageDecrement,
    hasNextPage,
    hasPrevPage,
  };
};
