import React, { useState } from "react";
import { FOX_BASE_URL } from "../../utils/сonstants";
import { useGetCorgiPembrokeQuery } from "../../store/apis/dogApi";
import Counter from "./Counter";
import { getRandomNumber } from "../../utils/helpers";
import { Animal } from "../../types";
import usePreloadImages from "../../hooks/usePreloadImages";
import Score from "./Score";
import { CircularProgress, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnimalsBox from "./AnimalsBox";

const Game = () => {
  const [score, setScore] = useState(0);

  const currentPlayerName = useSelector(
    (state: RootState) => state.game.currentPlayerName
  );

  const dogs = useGetCorgiPembrokeQuery(null);
  const foxesUrls = Array.from(
    { length: 30 },
    () => `${FOX_BASE_URL + (Math.floor(Math.random() * 100) + 1)}.jpg`
  );

  const { imagesPreloaded } = usePreloadImages([
    ...foxesUrls,
    ...(dogs?.data?.message || []),
  ]);

  const gamePictures = [...(dogs?.data?.message || [])].map<Animal>((x) => {
    return { animalType: "dog", url: x };
  });

  for (let i = 0; i < gamePictures.length / 9; i++) {
    gamePictures[getRandomNumber(9 * i, 9 * i + 8)] = {
      animalType: "fox",
      url: foxesUrls[i],
    };
  }

  return (
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      {imagesPreloaded ? (
        <>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Score score={score} />
            <Counter score={score} currentPlayerName={currentPlayerName} />
          </Stack>
          <AnimalsBox score={score} setScore={setScore} gamePictures={gamePictures} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
};
export default Game;
