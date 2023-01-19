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
  const [userWon, setUserWon] = useState(false);

  const generate = async () => {
    setIsLoadingUserCharacter(true);
    try {
      const { data } = await httpClient.get("characters/generate");
      console.log(data);
      if (data) {
        setCharacter(data?.data);
        setIsLoadingComputerCharacter(true);
        setTimeout(() => {
          generateComputerCharacter();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      //   setErrors((prev) => ({ ...prev, user: error }));
    } finally {
      setIsLoadingUserCharacter(false);
    }
  };

  const generateComputerCharacter = async () => {
    setIsLoadingComputerCharacter(true);
    try {
      const { data } = await httpClient.get(
        `characters/random/${character?._id}`
      );
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

  const simulateFight = async () => {
    setIsLoadingFight(true);
    setSimulation(
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ac orci phasellus egestas tellus rutrum tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. At volutpat diam ut venenatis. Fermentum et sollicitudin ac orci phasellus. Non odio euismod lacinia at. Integer quis auctor elit sed vulputate mi sit amet mauris. Lectus arcu bibendum at varius vel. Amet dictum sit amet justo. Scelerisque fermentum dui faucibus in. Dignissim convallis aenean et tortor at risus. Amet massa vitae tortor condimentum lacinia quis. Imperdiet massa tincidunt nunc pulvinar sapien et. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. At urna condimentum mattis pellentesque id. Convallis tellus id interdum velit laoreet id donec ultrices. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.   Massa sapien faucibus et molestie ac. Rutrum tellus pellentesque eu tincidunt. Potenti nullam ac tortor vitae purus. Volutpat ac tincidunt vitae semper quis lectus nulla. Pellentesque habitant morbi tristique senectus et. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget dolor morbi non arcu risus quis. Elit ullamcorper dignissim cras tincidunt. Enim facilisis gravida neque convallis a cras. Sit amet mauris commodo quis imperdiet. At elementum eu facilisis sed odio morbi quis commodo. Sem fringilla ut morbi tincidunt. Magna fringilla urna porttitor rhoncus dolor purus. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Velit dignissim sodales ut eu sem integer vitae. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Quis imperdiet massa tincidunt nunc pulvinar sapien. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.`
    );
    try {
      const { data } = await httpClient.get(
        `battles/simulate`,
        {
          characterOneId: character?._id,
          characterTwoId: computerCharacter?._id,
        },
        {}
      );
      if (data) {
        setSimulation(data?.data);
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
    simulation,
    onTypeDone,
  };
};
