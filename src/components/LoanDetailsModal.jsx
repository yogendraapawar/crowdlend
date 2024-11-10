import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LoanRequestDetailsCard from "./LoanRequestDetailsCard";
import { useSelector } from "react-redux";
import BidForm from "./BidForm";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsBidFormOpened } from "../features/flags/flagsSlice";
import { Height } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "90%",
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

export default function LoanDetailsModal({
  modalOpen,
  selectedLoanId,
  handleModalClose,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const [loanDetails, setLoanDetails] = useState({
    expected_interest_rate: 7.4,
    borrower_name: "Yogendra Pawar",
    loan_amount: 25000,
    loan_tenure: 20,
    application_status: "bidding",
    created_at: "23/12/2025",
    bids: [
      {
        id: "1",
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        id: "2",
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        id: "3",
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        id: "4",
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        id: "5",
        bidder_name: "ABC",
        bid_amount: 26000,
        offered_interest_rate: 7.5,
        bid_status: "2",
        offered_duration: 12,
      },
      {
        id: "6",
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
    } catch (error) {
      console.error("Error fetching loan modal details:", error);
    } finally {
      setIsLoading(false);
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
    px: 2,
    py: 3,
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
            <Box
              sx={{
                textAlign: "left",
                width: "100%",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "text.secondary",
              }}
            >
              {isBidFormOpened ? "Bid Form" : "Loan Details"}
            </Box>
            <IconButton
              onClick={() => {
                handleModalClose();
                dispatch(setIsBidFormOpened(false));
              }}
            >
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
