import React from "react";
import { Box } from "@mui/material";
import LoansList from "../../components/LoansList";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <LoansList />
    </Box>
  );
}
