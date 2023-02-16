import { useState } from "react";
import { httpClient } from "../network";

export const useGenerateCharacter = () => {
  const [userSelectedCharacter, setUserSelectedCharacter] = useState(null);
  const [isLoadingUserCharacter, setIsLoadingUserCharacter] = useState(false);
  const [isLoadingComputerCharacter, setIsLoadingComputerCharacter] =
    useState(false);
  const [typedLength, setTypedLength] = useState(1);
  const [character, setCharacter] = useState(null);
  const [computerCharacter, setComputerCharacter] = useState(null);
  const [error, setError] = useState("");
  const [isLoadingFight, setIsLoadingFight] = useState(false);
  const [simulation, setSimulation] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoadingUserRandomCharacter, setIsLoadingUserRandomCharacter] =
    useState(false);
  const [winner, setWinner] = useState(null);

  const generate = async () => {
    setIsLoadingUserCharacter(true);
    try {
      const { data } = await httpClient.get("characters/generate");
      console.log(data);
      if (data) {
        setCharacter(data?.data);
        setIsLoadingComputerCharacter(true);
        setTimeout(() => {
          generateComputerCharacter(data?.data?._id);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoadingUserCharacter(false);
    }
  };

  const generateComputerCharacter = async (id) => {
    console.log("character id for computer =>", id);
    setIsLoadingComputerCharacter(true);
    try {
      const { data } = await httpClient.get(`characters/random/${id}`);
      if (data) {
        setComputerCharacter(data?.data);
      }
      console.log("computer-character=>,", data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoadingComputerCharacter(false);
    }
  };

  const generateUserRandomCharacter = async () => {
    setIsLoadingUserRandomCharacter(true);
    try {
      const { data } = await httpClient.get(
        `characters/random/${character?._id}`
      );
      if (data) {
        setCharacter(data?.data);
        setIsLoadingComputerCharacter(true);
        setTimeout(() => {
          generateComputerCharacter(data?.data?._id);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoadingUserRandomCharacter(false);
    }
  };

  const simulateFight = async () => {
    setIsLoadingFight(true);
    try {
      const { data } = await httpClient.post(`battles/simulate`, {
        characterOneId: character?._id,
        characterTwoId: computerCharacter?._id,
      });
      if (data) {
        setSimulation(data?.data?.story?.trim());
        setWinner(data?.data?.winner);
      }
      console.log("game simulation => ,", data);
    } catch (error) {
      console.log(error);
      //   setErrors((prev) => ({ ...prev, computer: error }));
    } finally {
      setIsLoadingFight(false);
    }
  };

  console.log({ character, computerCharacter });

  const handleSelectCharacter = (char) => {
    setUserSelectedCharacter(char);
  };

  // const onTypeDone = () => {
  //   console.log("Typeing DONe");
  //   setTimeout(() => {
  //     setShowResult(true);
  //   }, 2500);
  // };

  const handleType = () => {
    setTypedLength(typedLength + 1);
    console.log("typing", typedLength, simulation?.trim().length);
    if (typedLength === simulation.trim().length) {
      setTimeout(() => {
        setShowResult(true);
      }, 2500);
    }
  };

  const onCloseModal = () => {
    setShowResult(false);
  };

  const resetGame = () => {
    setTypedLength(1);
    setUserSelectedCharacter(null);
    setCharacter(null);
    setShowResult(false);
    setSimulation("");
    setComputerCharacter(null);
    setWinner(null);
  };

  return {
    generate,
    character,
    error,
    isLoadingComputerCharacter,
    isLoadingUserCharacter,
    computerCharacter,
    handleSelectCharacter,
    userSelectedCharacter,
    simulateFight,
    isLoadingFight,
    simulation,
    // onTypeDone,
    showResult,
    onCloseModal,
    generateUserRandomCharacter,
    isLoadingUserRandomCharacter,
    winner,
    handleType,
    resetGame,
  };
};
