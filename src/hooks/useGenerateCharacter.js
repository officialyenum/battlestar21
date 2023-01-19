import { useState } from "react";
import { httpClient } from "../network";

export const useGenerateCharacter = () => {
  const [userSelectedCharacter, setUserSelectedCharacter] = useState(null);
  const [isLoadingUserCharacter, setIsLoadingUserCharacter] = useState(false);
  const [isLoadingComputerCharacter, setIsLoadingComputerCharacter] =
    useState(false);
  const [character, setCharacter] = useState(null);
  const [computerCharacter, setComputerCharacter] = useState(null);
  const [errors, setErrors] = useState({ computer: "", user: "" });
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
      //   setErrors((prev) => ({ ...prev, user: error }));
    } finally {
      setIsLoadingUserCharacter(false);
    }
  };

  const generateComputerCharacter = async (id) => {
    console.log("character idf fpor compuiter =>", id);
    setIsLoadingComputerCharacter(true);
    try {
      const { data } = await httpClient.get(`characters/random/${id}`);
      if (data) {
        setComputerCharacter(data?.data);
      }
      console.log("computer-character=>,", data);
    } catch (error) {
      console.log(error);
      //   setErrors((prev) => ({ ...prev, computer: error }));
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
      //   setErrors((prev) => ({ ...prev, user: error }));
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
        setSimulation(data?.data?.story);
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

  const onTypeDone = () => {
    setTimeout(() => {
      setShowResult(true);
    }, 2500);
  };

  const onCloseModal = () => {
    setShowResult(false);
  };

  return {
    generate,
    character,
    errors,
    isLoadingComputerCharacter,
    isLoadingUserCharacter,
    computerCharacter,
    handleSelectCharacter,
    userSelectedCharacter,
    simulateFight,
    isLoadingFight,
    simulation,
    onTypeDone,
    showResult,
    onCloseModal,
    generateUserRandomCharacter,
    isLoadingUserRandomCharacter,
    winner,
  };
};
