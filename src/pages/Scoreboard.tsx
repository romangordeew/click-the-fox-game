import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Scoreboard = () => {
  const navigate = useNavigate();
  const scores = useSelector((state: RootState) => state.game.scores);

  return (
    <Stack width="100%" height={585} overflow="scroll">
      {scores.length ? (
        <TableContainer
          sx={{ width: "100%", marginBottom: 2 }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...(scores || [])]
                .sort((a, b) => b.score - a.score)
                .map((player, i) => (
                  <TableRow key={player.name + i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.date}</TableCell>
                    <TableCell>{player.score}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Nobody played this game. Let's Play! </Typography>
      )}
      <Stack justifyContent="center" display="flex" flexDirection="row" gap={2}>
        <Button variant="outlined" onClick={() => navigate("/welcome")}>
          To welcome screen
        </Button>
        <Button variant="contained" onClick={() => navigate("/game")}>
          Play!
        </Button>
      </Stack>
    </Stack>
  );
};

export default Scoreboard;
