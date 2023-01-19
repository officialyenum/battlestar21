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
          <h2>Top battle Star Fighters</h2>
        </div>
        <div className={classes.characters}>
          {isLoading ? (
            <div className={classes.loader}>
              <p>Loading....</p>
            </div>
          ) : (
            characters?.map((player) => (
              <PlayerCard key={player?._id} character={player} />
            ))
          )}
          <div className={classes.pagination_container}>
            <Button
              text="Prev"
              onClick={() => handlePageDecrement()}
              isDisabled={!hasPrevPage}
              color={hasPrevPage ? "orange" : ""}
            />
            <p className={classes.currentPage}>{currentPage}</p>
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
