import React from "react";
import { Typography } from "@mui/material";

type ScoreProps = {
  score: number
}
const Score = ({score}:ScoreProps) => {
  return <Typography>Score: {score}</Typography>;
};

export default Score;
