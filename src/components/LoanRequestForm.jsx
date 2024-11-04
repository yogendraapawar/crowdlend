import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Importing Grid from MUI
// import { setIsLoanRequestFormOpened } from "../features/flags/flagsSlice"; // Adjust as needed
import CloseIcon from "@mui/icons-material/Close";

export default function LoanRequestForm() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [durationMonths, setDurationMonths] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Loan Request Submitted:", {
      loanAmount,
      interestRate,
      durationMonths,
    });
    // Dispatch your loan request data or handle it accordingly
    // dispatch(createLoanRequest({ loanAmount, interestRate, durationMonths }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h6">Create Loan Request</Typography>
        <IconButton
          onClick={() => {
            console.log("Dispatching close action");
            // dispatch(setIsLoanRequestFormOpened(false));
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        <Grid sx={{ width: "100%" }} size={{ sm: 12, md: 6, lg: 6 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <TextField
              label="Loan Amount (in Rupees)"
              variant="outlined"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              type="number"
              required
            />

            <TextField
              label="Interest Rate (%)"
              variant="outlined"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              type="number"
              required
            />

            <TextField
              label="Duration (in Months)"
              variant="outlined"
              value={durationMonths}
              onChange={(e) => setDurationMonths(e.target.value)}
              type="number"
              required
            />

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <ButtonGroup sx={{ mt: 2 }} size="small">
                <Button
                  variant="text"
                  sx={{ marginRight: 1 }}
                  onClick={() => {
                    console.log("Dispatching close action");
                    // dispatch(setIsLoanRequestFormOpened(false));
                  }}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
