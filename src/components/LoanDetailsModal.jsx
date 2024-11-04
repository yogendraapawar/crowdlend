import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { fetchLoanModalDetailsData } from "../api/fetchLoanData";
import LoanRequestDetailsCard from "./LoanRequestDetailsCard";
import { useSelector } from "react-redux";
import BidForm from "./BidForm";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  padding: 0, // Remove padding from main container
};

export default function LoanDetailsModal({
  modalOpen,
  selectedLoanId,
  handleModalClose,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [loanDetails, setLoanDetails] = useState({
    borrower_name: "Yogendra Pawar",
    loan_amount: 25000,
    duration_in_months: 20,
    application_status: "bidding",
    created_at: "23/12/2025",
    expected_interest_rate: 7,
    bids: [
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
    ],
  });
  const isBidFormOpened = useSelector((state) => state.flags.isBidFormOpened);

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    handleModalClose();
  };

  const fetchData = async () => {
    try {
      const response = await fetchLoanModalDetailsData(selectedLoanId);
      console.log("response", response, selectedLoanId);

      // Check if the response contains the expected data
      if (response) {
        setLoanDetails(response.loanDetails);
      }
    } catch (error) {
      console.error("Error fetching loan modal details:", error);
    } finally {
      setIsLoading(false); // Set loading to false in both success and error cases
    }
  };

  useEffect(() => {
    console.log("useeffect", selectedLoanId);
    if (selectedLoanId) {
      fetchData();
    }
  }, [selectedLoanId]);

  const headerStyle = {
    position: "sticky",
    top: 0,
    bgcolor: "background.paper",
    borderBottom: "1px solid",
    borderColor: "divider",
    p: 2,
    zIndex: 1,
  };

  const contentStyle = {
    overflowY: "auto",
    flex: 1,
    p: 4, // Move padding to content area
  };
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={modalStyle}>
        {/* Sticky Header */}
        <Box sx={headerStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "left",
              paddingX: 2,
            }}
          >
            <Typography variant="h6">Loan Details</Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Scrollable Content */}
        <Box sx={contentStyle}>
          {isLoading ? (
            <Typography>Loading content...</Typography>
          ) : (
            <>
              {isBidFormOpened ? (
                <BidForm loanDetails={loanDetails} />
              ) : (
                <LoanRequestDetailsCard
                  handleModalClose={handleModalClose}
                  loanDetails={loanDetails}
                />
              )}
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
