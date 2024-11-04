import React from "react";
import { Box } from "@mui/material";
import FilterTab from "../components/FilterTab";
import LoansList from "../components/LoansList";

export default function Dashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FilterTab />
      <LoansList />
    </Box>
  );
}
