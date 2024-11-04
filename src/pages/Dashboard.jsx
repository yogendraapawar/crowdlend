import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import LoanRequestDetailsCard from "../components/LoanRequestDetailsCard";
import Typography from "@mui/material/Typography";
import LoansList from "../components/LoansList";
import LoanDetailsModal from "../components/LoanDetailsModal";
import { useState } from "react";

export default function Dashboard() {

  return (
    <Box sx={{ width: "100%" }}>
      <LoansList /> 
    </Box>
  );
}
