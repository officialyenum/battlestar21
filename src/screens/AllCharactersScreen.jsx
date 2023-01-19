import React from "react";
import { Footer, Header } from "../components";
import { Button } from "../components/Button";
import { PlayerCard } from "../components/PlayerCard";
import { useGetAllCharacters } from "../hooks";
import classes from "./pages.module.css";

export const AllCharactersScreen = () => {
  const {
    characters,
    isLoading,
    currentPage,
    handlePageDecrement,
    handlePageIncrement,
    hasNextPage,
    hasPrevPage,
  } = useGetAllCharacters();
  return (
    <div className="main">
      <Header />
      <div className={`${classes.mainContainer} container_12`}>
        <div className={classes.section_header}>
          <h2>Characters</h2>
        </div>
        <div className={classes.characters}>
          {isLoading && characters?.length < 0 ? (
            <p>Loading</p>
          ) : (
            characters?.map((player) => (
              <PlayerCard hideStatus={true} character={player} />
            ))
          )}
          <div className={classes.pagination_container}>
            <Button
              text="Prev"
              onClick={() => handlePageDecrement()}
              isDisabled={!hasPrevPage}
              color={hasPrevPage ? "orange" : ""}
            />
            <Button
              text="Next"
              onClick={() => handlePageIncrement()}
              isDisabled={!hasNextPage}
              color={hasNextPage ? "orange" : ""}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
