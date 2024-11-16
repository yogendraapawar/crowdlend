import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  IconButton,
  CircularProgress,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoanRequestDetailsCard from "./LoanRequestDetailsCard";
import BidForm from "./BidForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsBidFormOpened,
  setIsLoanDetailsModalOpen,
} from "../features/flags/flagsSlice";
const dialogStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoanDetailsModal({ selectedLoanId }) {
  const [isLoading, setIsLoading] = useState(true);
  const isModalOpen = useSelector(
    (state) => state.flags.isLoanDetailsModalOpen
  );
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
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsLoanDetailsModalOpen(false));
    dispatch(setIsBidFormOpened(false));
  };

  const fetchData = async () => {
    try {
      // Simulate fetching data
    } catch (error) {
      console.error("Error fetching loan dialog details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedLoanId) {
      fetchData();
    }
  }, [selectedLoanId]);

  return (
    <Dialog
      fullScreen
      open={isModalOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      BackdropProps={{
        timeout: 500, // Sync the backdrop transition with the dialog
      }}
      disableRestoreFocus
    >
      <Box sx={dialogStyle}>
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
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              {isBidFormOpened ? "Bid Form" : "Loan Details"}
            </Typography>
            <IconButton
              sx={{ display: isBidFormOpened ? "none" : "block" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Scrollable Content */}
        <Box sx={contentStyle}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {isBidFormOpened ? (
                <BidForm loanDetails={loanDetails} />
              ) : (
                <LoanRequestDetailsCard loanDetails={loanDetails} />
              )}
            </>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
