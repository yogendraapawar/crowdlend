import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import LoanRequestDetailsCard from "../components/LoanRequestDetailsCard";
import Typography from "@mui/material/Typography";
import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import LoanDetailsModal from "../components/LoanDetailsModal";


export default function LoansList() {
  const loanData = [
    {
      loan_id: "a",
      borrower_name: "Yogendra Pawar",
      loan_amount: 25000,
      loan_duration: 20,
      expected_interest_rate: 7.4,
      created_at: "25/10/2024",
    },
    {
      loan_id: "b",
      borrower_name: "Anjali Sharma",
      loan_amount: 15000,
      loan_duration: 12,
      expected_interest_rate: 6.5,
      created_at: "15/10/2024",
    },
    {
      loan_id: "c",
      borrower_name: "Rahul Mehta",
      loan_amount: 50000,
      loan_duration: 24,
      expected_interest_rate: 8.0,
      created_at: "10/10/2024",
    },
    {
      loan_id: "d",
      borrower_name: "Sneha Gupta",
      loan_amount: 30000,
      loan_duration: 18,
      expected_interest_rate: 5.5,
      created_at: "05/10/2024",
    },
    {
      loan_id: "e",
      borrower_name: "Vikram Singh",
      loan_amount: 20000,
      loan_duration: 15,
      expected_interest_rate: 7.0,
      created_at: "20/09/2024",
    },
    {
      loan_id: "f",
      borrower_name: "Neha Desai",
      loan_amount: 40000,
      loan_duration: 36,
      expected_interest_rate: 9.0,
      created_at: "01/09/2024",
    },
    {
      loan_id: "g",
      borrower_name: "Ajay Kumar",
      loan_amount: 35000,
      loan_duration: 30,
      expected_interest_rate: 6.8,
      created_at: "30/08/2024",
    },
    {
      loan_id: "h",
      borrower_name: "Pooja Rani",
      loan_amount: 18000,
      loan_duration: 14,
      expected_interest_rate: 7.2,
      created_at: "25/07/2024",
    },
  ];
  const handleClick = (loanId) => {
    // Your click handler logic here
    console.log("dfghjkl",loanId)
    setSelectedLoanId(loanId)
    handleModalOpen()
  };
   const [modalOpen, setModalOpen] = useState(false);
   const [selectedLoanId, setSelectedLoanId] = useState(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };



  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column" // Change to "column" for a vertical layout
        p={2}
        sx={{
          width: "100%",
          gap: 2,
        }}
      >
        {loanData.map((loan) => (
          <Card key={loan.loan_id} sx={{ display: "flex", width: "100%" }}>
            <CardActionArea onClick={() => handleClick(loan.loan_id)}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingX: "1rem",
                    paddingY: "0.5rem",
                  }}
                >
                  <Typography sx={{ textAlign: "left", fontWeight: 800 }}>
                    {loan.borrower_name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                      }}
                    >
                      {loan.loan_amount}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        marginLeft: 1,
                        textAlign: "left",
                      }}
                    >
                      @ {loan.expected_interest_rate} interest rate
                    </Typography>
                  </Box>
                  <Typography sx={{ textAlign: "left" }}>
                    {loan.loan_duration} Months term duration
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingX: "1rem",
                  }}
                ></Box>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <LoanDetailsModal
        modalOpen={modalOpen}
        selectedLoanId={selectedLoanId}
        handleModalClose={handleModalClose}
      />
    </>
  );
}
