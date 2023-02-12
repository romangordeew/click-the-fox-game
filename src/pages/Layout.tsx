import React from "react";
import Header from "../сomponents/Header";
import { Paper, Stack } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack height="100%" display="flex" alignItems="center" justifyContent="center">
      <Paper sx={{ padding: 4, width: 600, textAlign: "center", height: 640 }}>
        <Header />
        <Stack width="100%" display="flex" alignItems="center" marginTop={2}>{children}</Stack>
      </Paper>
    </Stack>
  );
};

export default Layout;
