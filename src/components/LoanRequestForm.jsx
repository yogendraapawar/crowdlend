import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { PageContainer } from "@toolpad/core/PageContainer";
import React, { useState } from "react";

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
  };

  return (
    <PageContainer breadcrumbs={false} title="Create Loan Request">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
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
                fullWidth
                sx={{ marginBottom: 2 }}
              />

              <TextField
                label="Interest Rate (%)"
                variant="outlined"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />

              <TextField
                label="Duration (in Months)"
                variant="outlined"
                value={durationMonths}
                onChange={(e) => setDurationMonths(e.target.value)}
                type="number"
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    console.log("Dispatching close action");
                  }}
                  sx={{
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                >
                  Clear
                </Button>
                <Button variant="contained" type="submit" sx={{}}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
