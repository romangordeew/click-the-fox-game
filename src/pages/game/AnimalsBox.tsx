import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Animal } from "../../types";

type AnimalsBoxProps = {
  gamePictures: Animal[];
  setScore: (score: number) => void;
  score: number;
};

const AnimalsBox = ({ gamePictures, setScore, score }: AnimalsBoxProps) => {
  const [clicks, setClicks] = useState(0);

  const animalClickHandler = (animalType: string) => {
    setScore(animalType === "fox" ? score + 1 : score - 1);
    setClicks((prevState) => prevState + 1);
  };

  if (clicks * 9 + 9 > gamePictures.length) {
    setClicks(0);
  }

  return (
    <Stack
      sx={{
        width: 540,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {gamePictures.slice(clicks * 9, clicks * 9 + 9).map((x, index) => (
        <img
          key={x.animalType + index}
          style={{
            width: 180,
            height: 180,
            objectFit: "cover",
            cursor: "pointer",
          }}
          src={x.url}
          alt={x.animalType}
          onClick={() => animalClickHandler(x.animalType)}
        />
      ))}
    </Stack>
  );
};

export default AnimalsBox;
