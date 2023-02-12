import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Game from "./pages/game/Game";
import Welcome from "./pages/Welcome";
import Scoreboard from "./pages/Scoreboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
        </Route>
        <Route path="game" element={<Game />} />
        <Route path="scoreboard" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  );
};
