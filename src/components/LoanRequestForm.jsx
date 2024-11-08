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
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";

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
        width: "100%",
        gap: 2,
        padding: { xs: 2, sm: 3 }, // Add some padding for smaller screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          Create Loan Request
        </Typography>
      </Box>
      <Card sx={{ px: 5, py: "5rem" }}>
        <Grid fullWidth container spacing={2}>
          <Grid width={"100%"} item xs={12}>
            {" "}
            {/* Ensure it takes full width */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%", // Ensure form takes full width
              }}
            >
              <TextField
                label="Loan Amount (in Rupees)"
                variant="outlined"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                type="number"
                required
                fullWidth // Make text field full width
                sx={{ marginBottom: 2 }} // Add margin to separate the inputs
              />

              <TextField
                label="Interest Rate (%)"
                variant="outlined"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                required
                fullWidth // Make text field full width
                sx={{ marginBottom: 2 }}
              />

              <TextField
                label="Duration (in Months)"
                variant="outlined"
                value={durationMonths}
                onChange={(e) => setDurationMonths(e.target.value)}
                type="number"
                required
                fullWidth // Make text field full width
                sx={{ marginBottom: 2 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2, // Add gap between buttons
                  flexDirection: { xs: "column", sm: "row" }, // Stack buttons on mobile, align on row for larger screens
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    console.log("Dispatching close action");
                    // dispatch(setIsLoanRequestFormOpened(false));
                  }}
                  sx={{
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit" sx={{}}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
