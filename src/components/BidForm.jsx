import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  ButtonGroup,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch } from "react-redux";
import {
  setIsBidFormOpened,
  setIsLoanDetailsModalOpen,
} from "../features/flags/flagsSlice";
import { ConfirmDialog } from "@toolpad/core";
import ConfirmationDialog from "./ConfirmationDialog";
import { DisabledByDefault } from "@mui/icons-material";

export default function BidForm({ loanDetails }) {
  const [months, setMonths] = useState(loanDetails.loan_tenure || "");
  const [interestRate, setInterestRate] = useState(
    loanDetails.expected_interest_rate || ""
  );
  const [amount, setAmount] = useState(loanDetails.loan_amount || "");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [loanMonthlyPayment, setLoanMonthlyPayment] = useState(0);
  const [loanTotalPayment, setLoanTotalPayment] = useState(0);
  const [loanInterestAmount, setLoanInterestAmount] = useState(0);
  const [userInterestAmount, setUserInterestAmount] = useState(0);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  // Function to open the confirmation dialog
  const openConfirmationDialog = () => {
    setIsConfirmationDialogOpen(true);
  };

  // Function to close the confirmation dialog
  const closeConfirmationDialog = () => {
    setIsConfirmationDialogOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      loanDetails.loan_amount &&
      loanDetails.expected_interest_rate &&
      loanDetails.loan_tenure
    ) {
      const principal = parseFloat(loanDetails.loan_amount);
      const interest =
        parseFloat(loanDetails.expected_interest_rate) / 100 / 12;
      const totalMonths = parseInt(loanDetails.loan_tenure);

      const payment =
        (principal * interest) / (1 - Math.pow(1 + interest, -totalMonths));
      const total = payment * totalMonths;
      const interestAmount = total - principal;

      setLoanMonthlyPayment(payment.toFixed(2));
      setLoanTotalPayment(total.toFixed(2));
      setLoanInterestAmount(interestAmount.toFixed(2));
    }
  }, [loanDetails]);

  useEffect(() => {
    console.log("loan details from bid form", loanDetails);
    if (months && interestRate && amount) {
      const principal = parseFloat(amount);
      const interest = parseFloat(interestRate) / 100 / 12;
      const totalMonths = parseInt(months);

      const payment =
        (principal * interest) / (1 - Math.pow(1 + interest, -totalMonths));
      const total = payment * totalMonths;
      const interestAmount = total - principal;

      setMonthlyPayment(payment.toFixed(2));
      setTotalPayment(total.toFixed(2));
      setUserInterestAmount(interestAmount.toFixed(2));
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setUserInterestAmount(0);
    }
  }, [months, interestRate, amount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { months, interestRate, amount });
  };

  const showCalculations = months && interestRate && amount;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Grid container spacing={2} mt={2}>
        <Grid
          sx={{ width: "100%", px: "1rem" }}
          size={{ sm: 12, md: 6, lg: 6 }}
        >
          <Box sx={{ mb: 2, width: "100%" }}>
            {/* Loan details with key-value pairs */}
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 1, width: "100%" }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
              >
                Loan Amount:
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, textAlign: "left" }}>
                ₹{loanDetails.loan_amount}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 1, width: "100%" }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
              >
                Duration:
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, textAlign: "left" }}>
                {loanDetails.loan_tenure} months
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 1, width: "100%", marginBottom: 2 }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
              >
                Expected Interest Rate:
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, textAlign: "left" }}>
                {loanDetails.expected_interest_rate}%
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Paper sx={{ padding: 1 }} elevation={2}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    flex: 1,
                    textAlign: "left",
                    marginBottom: 1,
                  }}
                >
                  Requested:
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                  >
                    Loan Monthly Payment:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ flex: 1, textAlign: "left" }}
                  >
                    {loanMonthlyPayment ? `₹${loanMonthlyPayment}` : "N/A"}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                  >
                    Loan Total Payment:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ flex: 1, textAlign: "left" }}
                  >
                    {loanTotalPayment ? `₹${loanTotalPayment}` : "N/A"}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                  >
                    Loan Interest Amount:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ flex: 1, textAlign: "left" }}
                  >
                    {loanInterestAmount ? `₹${loanInterestAmount}` : "N/A"}
                  </Typography>
                </Box>
              </Paper>

              {/* Display calculated results for user input only if sufficient data is provided */}
              {showCalculations && (
                <Paper sx={{ padding: 1 }} elevation={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      flex: 1,
                      textAlign: "left",
                      marginBottom: 1,
                    }}
                  >
                    Offered:
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                    >
                      Monthly Payment:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      {monthlyPayment ? `₹${monthlyPayment}` : "N/A"}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                    >
                      Total Payment:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      {totalPayment ? `₹${totalPayment}` : "N/A"}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ mb: 1, width: "100%", paddingLeft: 2 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", flex: 1, textAlign: "left" }}
                    >
                      Interest Amount:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      {userInterestAmount ? `₹${userInterestAmount}` : "N/A"}
                    </Typography>
                  </Box>
                </Paper>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{ width: "100%", px: "1rem" }}
          size={{ sm: 12, md: 6, lg: 6 }}
        >
          {/* Input form */}
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
              label="Number of Months"
              variant="outlined"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
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
              label="Amount (in Rupees)"
              variant="outlined"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
                    dispatch(setIsBidFormOpened(false));
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    openConfirmationDialog();
                  }}
                >
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ConfirmationDialog
        open={isConfirmationDialogOpen}
        onClose={closeConfirmationDialog}
      />
    </Box>
  );
}
