import React, { useEffect } from "react";
import { addScore } from "../../store/slices/gameSlice";
import { useNavigate } from "react-router-dom";
import { useGameTimer } from "../../hooks/useGameTimer";
import { GAME_DURATION } from "../../utils/сonstants";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

type CounterProps = {
  score: number;
  currentPlayerName: string;
};

const Counter = ({ score, currentPlayerName }: CounterProps) => {
  const navigate = useNavigate();
  const timeLeft = useGameTimer({ duration: GAME_DURATION });
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(
        addScore({
          name: currentPlayerName,
          date: new Date().toLocaleDateString(),
          score,
        })
      );
      navigate("/scoreboard");
    }
  }, [timeLeft]);

  return <Typography>Time left: {timeLeft}</Typography>;
};

export default Counter;
