import React, { useState } from "react";
import { Footer, Header } from "../components";
import { Button } from "../components/Button";
import { SimulationModal } from "../components/Modals";
import { useGetAllBattles } from "../hooks";
import classes from "./pages.module.css";

export const BattleScreen = () => {
  const {
    battles,
    isLoading,
    currentPage,
    handlePageDecrement,
    handlePageIncrement,
    hasNextPage,
    hasPrevPage,
  } = useGetAllBattles();

  const [selectedStory, setSelectedStory] = useState("");
  const [winner, setWinner] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setWinner(null);
    setSelectedStory("");
  };

  return (
    <div className="main">
      <Header />
      <div className={`${classes.mainContainer} container_12`}>
        <div className={classes.section_header}>
          <h2>21 Top battles</h2>
        </div>
        <div className={classes.characters}>
          {isLoading && (
            <div className={classes.loader}>
              <p>Loading....</p>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Winner</th>
                <th>Stage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {battles?.map((batt) => (
                <tr>
                  <td>{batt?.characterOne?.name}</td>
                  <td>{batt?.characterTwo?.name}</td>
                  <td>{batt?.winner?.name}</td>
                  <td>{batt?.stage}</td>
                  <td>
                    <button
                      className={classes.viewButton}
                      onClick={() => {
                        setSelectedStory(batt?.story);
                        setWinner(batt?.winner?.name);
                        setIsOpen(true);
                      }}
                    >
                      <p className={classes.slanted_content}>View Simulation</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      <SimulationModal
        isOpen={isOpen}
        onClose={onClose}
        winner={winner}
        simulation={selectedStory}
      />
      <Footer />
    </div>
  );
};
