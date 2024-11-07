import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import LoanDetailsModal from "../components/LoanDetailsModal";
import TablePagination from "@mui/material/TablePagination";
import FilterTab from "./FilterTab";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function LoansList() {
  const loanData = [
    {
      loan_id: "a",
      borrower_name: "Yogendra Pawar",
      loan_amount: 25000,
      loan_duration: 20,
      expected_interest_rate: 7.4,
      loan_status: "ongoing",
      created_at: "25/10/2024",
      status: "bidding",
    },
    {
      loan_id: "b",
      borrower_name: "Anjali Sharma",
      loan_amount: 15000,
      loan_duration: 12,
      expected_interest_rate: 6.5,
      created_at: "15/10/2024",
      status: "completed",
    },
    {
      loan_id: "c",
      borrower_name: "Rahul Mehta",
      loan_amount: 50000,
      loan_duration: 24,
      expected_interest_rate: 8.0,
      created_at: "10/10/2024",
      status: "bidding",
    },
    {
      loan_id: "d",
      borrower_name: "Sneha Gupta",
      loan_amount: 30000,
      loan_duration: 18,
      expected_interest_rate: 5.5,
      created_at: "05/10/2024",
      status: "closed",
    },
    {
      loan_id: "e",
      borrower_name: "Vikram Singh",
      loan_amount: 20000,
      loan_duration: 15,
      expected_interest_rate: 7.0,
      created_at: "20/09/2024",
      status: "bidding",
    },
    {
      loan_id: "f",
      borrower_name: "Neha Desai",
      loan_amount: 40000,
      loan_duration: 36,
      expected_interest_rate: 9.0,
      created_at: "01/09/2024",
      status: "completed",
    },
    {
      loan_id: "g",
      borrower_name: "Ajay Kumar",
      loan_amount: 35000,
      loan_duration: 30,
      expected_interest_rate: 6.8,
      created_at: "30/08/2024",
      status: "bidding",
    },
    {
      loan_id: "h",
      borrower_name: "Pooja Rani",
      loan_amount: 18000,
      loan_duration: 14,
      expected_interest_rate: 7.2,
      created_at: "25/07/2024",
      status: "completed",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoanId, setSelectedLoanId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(50);

  const handleClick = (loanId) => {
    setSelectedLoanId(loanId);
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  console.log("RERENDERED LOANLIST");

  const handleModalClose = () => setModalOpen(false);

  // Calculate the current loans to display based on the current page
  const startIndex = currentPage * itemsPerPage;
  const currentLoans = loanData.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ width: "100%", gap: 2 }}>
        <FilterTab />
        <Grid container spacing={2}>
          {currentLoans.map((loan) => (
            <Grid sx={{ width: "100%" }} size={{ sm: 12, md: 6, lg: 4 }}>
              <LoanItemCard loan={loan} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <TablePagination
        component="div"
        count={loanData.length}
        page={currentPage}
        onPageChange={handleChangePage}
        rowsPerPage={itemsPerPage}
        onRowsPerPageChange={(event) => {
          setItemPerPage(parseInt(event.target.value, 10)); // or use a state setter that you have defined for itemsPerPage
        }}
      />
      <LoanDetailsModal
        modalOpen={modalOpen}
        selectedLoanId={selectedLoanId}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

function generateRandomColor(name) {
  // Simple hash function based on the string
  const hashCode = name
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);

  // Generate a color from the hash code (0xFFFFFF is the max RGB color value)
  const color = `#${((hashCode >> 24) & 0xff).toString(16).padStart(2, "0")}${((hashCode >> 16) & 0xff).toString(16).padStart(2, "0")}${((hashCode >> 8) & 0xff).toString(16).padStart(2, "0")}`;

  return color;
}

function LoanItemCard({ loan, handleClick }) {
  const avatarColor = generateRandomColor(loan.borrower_name);
  const getStatusColor = (status) => {
    switch (status) {
      case "bidding":
        return { backgroundColor: "orange", color: "white" }; // Orange background for 'bidding'
      case "completed":
        return { backgroundColor: "green", color: "white" }; // Green background for 'completed'
      case "closed":
        return { backgroundColor: "red", color: "white" }; // Red background for 'closed'
      default:
        return { backgroundColor: "grey", color: "white" }; // Default to grey if unknown
    }
  };
  return (
    <Card
      key={loan.loan_id}
      sx={{
        display: "flex",
        width: "100%",
        boxShadow: 3,
        borderRadius: 2,
        mb: 2,
      }}
    >
      <CardActionArea
        onClick={() => handleClick(loan.loan_id)}
        sx={{ width: "100%", px: 2, py: 2 }}
      >
        <Box
          sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2 }}
        >
          {/* Avatar container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Horizontally center the Avatar
              flexGrow: 1,
            }}
          >
            <Avatar
              sx={{
                width: "4rem",
                height: "4rem",
                backgroundColor: avatarColor,
              }}
            >
              {loan.borrower_name.slice(0, 1)}{" "}
              {/* Display first letter of name */}
            </Avatar>
          </Box>

          {/* Loan details container */}
          <Box sx={{ flexGrow: 3 }}>
            {/* Name container */}
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {loan.borrower_name}
            </Box>
            {/* Amount @ interest rate */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* Loan Amount */}
              <Typography
                sx={{
                  fontWeight: "bold", // Bold text for loan amount
                  color: "primary.main", // Primary color for emphasis
                  fontSize: "1.5rem",
                }}
              >
                ₹{loan.loan_amount.toLocaleString()}{" "}
                {/* Formatting loan amount with commas */}
              </Typography>

              {/* Interest Rate */}
              <Typography
                sx={{
                  color: "text.secondary", // Lighter color for interest rate
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginLeft: 1, // Adds spacing between the loan amount and interest rate
                }}
              >
                @ {loan.expected_interest_rate}%{" "}
                {/* Formatting interest rate with percentage */}
              </Typography>
            </Box>
            {/* loan duration */}
            <Box
              sx={{ width: "100%", textAlign: "left", color: "text.secondary" }}
            >
              {/* Use Typography for the text with different styles */}
              <Typography component="span" sx={{ color: "text.secondary" }}>
                {"for "}
              </Typography>

              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  fontSize: "1rem",
                }}
              >
                {loan.loan_duration}
              </Typography>

              <Typography component="span" sx={{ color: "text.secondary" }}>
                {" months"}
              </Typography>
            </Box>
            {/* date */}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            textAlign: "right",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box>{loan.created_at}</Box>
          <Box>
            <Chip
              sx={{
                ...getStatusColor(loan.status), // Apply the background color and text color dynamically
                margin: 1, // Optional: add some margin to separate the chip from other elements
              }}
              label={loan.status} // Display the loan status in the chip
            />
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
