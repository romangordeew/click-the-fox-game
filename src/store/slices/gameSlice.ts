import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { iScore } from "../../types";

export interface GameState {
  currentPlayerName: string;
  scores: iScore[];
}

const initialState: GameState = {
  scores: [],
  currentPlayerName: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<iScore>) => {
      state.scores.push(action.payload);
    },
    setCurrentPlayerName: (state, action: PayloadAction<string>) => {
      state.currentPlayerName = action.payload;
    },
  },
});

export const { setCurrentPlayerName, addScore } = gameSlice.actions;

export default gameSlice.reducer;
