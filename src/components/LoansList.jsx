import {} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PercentIcon from "@mui/icons-material/Percent";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
import GavelIcon from "@mui/icons-material/Gavel";

export default function LoansList() {
  const loanData = [
    {
      id: "1",
      loan_id: "a",
      borrower_name: "Yogendra Pawar",
      loan_amount: 25000,
      loan_duration: 20,
      expected_interest_rate: 7.4,
      loan_status: "ongoing",
      created_at: "25/10/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "2",
      loan_id: "b",
      borrower_name: "Anjali Sharma",
      loan_amount: 15000,
      loan_duration: 12,
      expected_interest_rate: 6.5,
      created_at: "15/10/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "3",
      loan_id: "c",
      borrower_name: "Rahul Mehta",
      loan_amount: 50000,
      loan_duration: 24,
      expected_interest_rate: 8.0,
      created_at: "10/10/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "4",
      loan_id: "d",
      borrower_name: "Sneha Gupta",
      loan_amount: 30000,
      loan_duration: 18,
      expected_interest_rate: 5.5,
      created_at: "05/10/2024",
      status: "closed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "5",
      loan_id: "e",
      borrower_name: "Vikram Singh",
      loan_amount: 20000,
      loan_duration: 15,
      expected_interest_rate: 7.0,
      created_at: "20/09/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "6",
      loan_id: "f",
      borrower_name: "Neha Desai",
      loan_amount: 40000,
      loan_duration: 36,
      expected_interest_rate: 9.0,
      created_at: "01/09/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "7",
      loan_id: "g",
      borrower_name: "Ajay Kumar",
      loan_amount: 35000,
      loan_duration: 30,
      expected_interest_rate: 6.8,
      created_at: "30/08/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "8",
      loan_id: "h",
      borrower_name: "Pooja Rani",
      loan_amount: 18000,
      loan_duration: 14,
      expected_interest_rate: 7.2,
      created_at: "25/07/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
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

  const startIndex = currentPage * itemsPerPage;
  const currentLoans = loanData.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "100%", gap: 2, height: "100%" }}
      >
        <Grid container spacing={2}>
          {currentLoans.map((loan) => (
            <Grid sx={{ width: "100%" }} size={{ sm: 12, md: 12, lg: 4 }}>
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
          setItemPerPage(parseInt(event.target.value, 10));
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
  const hashCode = name
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);

  const color = `#${((hashCode >> 24) & 0xff).toString(16).padStart(2, "0")}${((hashCode >> 16) & 0xff).toString(16).padStart(2, "0")}${((hashCode >> 8) & 0xff).toString(16).padStart(2, "0")}`;

  return color;
}

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",

  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[1],
  },
}));

const GlowCircle = styled(Box)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(40px)",
  zIndex: 0,
}));

const StatusChip = styled(Chip)(({ status, theme }) => {
  const colors = {
    bidding: {
      bg: theme.palette.warning.main,
      hover: theme.palette.warning.dark,
    },
    completed: {
      bg: theme.palette.success.main,
      hover: theme.palette.success.dark,
    },
    closed: {
      bg: theme.palette.error.main,
      hover: theme.palette.error.dark,
    },
    default: {
      bg: theme.palette.grey[500],
      hover: theme.palette.grey[700],
    },
  };

  const statusColor = colors[status] || colors.default;

  return {
    backgroundColor: statusColor.bg,
    color: "#fff",
    fontWeight: 600,
    padding: "4px 8px",
    height: "28px",
    "&:hover": {
      backgroundColor: statusColor.hover,
    },
    transition: "background-color 0.2s ease-in-out",
  };
});

const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

function LoanItemCard({ loan, handleClick }) {
  const avatarColor = generateRandomColor(loan.borrower_name);

  return (
    <StyledCard>
      <GlowCircle sx={{ top: -100, right: -100, width: 200, height: 200 }} />
      <GlowCircle sx={{ bottom: -80, left: -80, width: 160, height: 160 }} />

      <CardActionArea
        onClick={() => handleClick(loan.loan_id)}
        sx={{ height: "100%" }}
      >
        <Box sx={{ p: 3, position: "relative", zIndex: 1 }}>
          {/* Header Section */}
          <Box sx={{ display: "flex", gap: 3, mb: 2.5 }}>
            {/* Avatar */}
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: avatarColor,
                fontSize: "1.75rem",
                fontWeight: "bold",
                boxShadow: 2,
              }}
            >
              {loan.borrower_name.slice(0, 1)}
            </Avatar>

            {/* Name and Date */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ mb: 0.5, fontWeight: 600, textAlign: "left" }}
              >
                {loan.borrower_name}
              </Typography>
              <InfoRow>
                <CalendarTodayIcon
                  sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {loan.created_at}
                </Typography>
              </InfoRow>
            </Box>

            {/* Status Chip */}
            <StatusChip label={loan.status} status={loan.status} size="small" />
          </Box>

          {/* Loan Details Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Amount and Interest */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "action.hover",
                borderRadius: 2,
                p: 2,
              }}
            >
              {/* Amount */}
              <InfoRow sx={{ flex: 1 }}>
                <CurrencyRupeeIcon color="primary" />
                <Typography variant="h5" color="primary" fontWeight="bold">
                  {loan.loan_amount.toLocaleString()}
                </Typography>
              </InfoRow>

              {/* Interest Rate */}
              <InfoRow>
                <PercentIcon sx={{ color: "success.main" }} />
                <Typography
                  variant="subtitle1"
                  sx={{ color: "success.main", fontWeight: 600 }}
                >
                  {loan.expected_interest_rate}%
                </Typography>
              </InfoRow>
            </Box>

            {/* Duration */}
            <InfoRow
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Loan Duration Section */}
              <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                <AccessTimeIcon sx={{ color: "text.secondary" }} />
                <Typography color="text.secondary" sx={{ ml: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 600, color: "text.primary" }}
                  >
                    {loan.loan_duration}
                  </Box>
                  {" months"}
                </Typography>
              </Box>

              {/* Bids Count Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <GavelIcon sx={{ color: "text.secondary", mr: 1 }} />
                <Typography color="text.secondary">
                  <Box
                    component="span"
                    sx={{ fontWeight: 600, color: "text.primary" }}
                  >
                    {loan.bids_count}
                  </Box>
                  {" bids"}
                </Typography>
              </Box>
            </InfoRow>
          </Box>
        </Box>
      </CardActionArea>
    </StyledCard>
  );
}
