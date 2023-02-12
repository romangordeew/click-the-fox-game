import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCurrentPlayerName } from "../store/slices/gameSlice";
import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPlayerName = useSelector(
    (state: RootState) => state.game.currentPlayerName
  );
  const [currentName, setCurrentName] = useState<string>(currentPlayerName);
  const [isChangeName, setIsChangeName] = useState<boolean>(false);

  const onPlay = () => {
    dispatch(setCurrentPlayerName(currentName));
    navigate("/game");
  };

  return (
    <Stack
      marginTop={20}
      width={300}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {currentPlayerName === "" || isChangeName ? (
        <TextField
          size="small"
          label="Name"
          variant="outlined"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          name="name"
          required={true}
          type="text"
        />
      ) : (
        <Typography onClick={() => setIsChangeName(true)}>
          {currentPlayerName}
        </Typography>
      )}

      <Button
        variant="contained"
        disabled={!currentName.length}
        onClick={onPlay}
      >
        Play!
      </Button>
    </Stack>
  );
};

export default Welcome;
